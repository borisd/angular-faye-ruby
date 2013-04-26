require 'sinatra/base'
require 'faye'
require 'thin'
require 'json'

EM.run do
  # Start Faye Server
  Faye::RackAdapter.new(:mount => '/faye', :timeout => 25).listen(3001)

  # Connect to Faye Server
  $client = Faye::Client.new('http://example.com:3001/faye')

  # Subscribe to client messages
  $client.subscribe('/fromclient') do |message|
    puts "> %s" % message
    $client.publish '/fromserver', "Received message length: #{message.length}"
  end

  # Simple app to show how to post messages from the server side
  class App < Sinatra::Base
    post '/' do
      msg = JSON.parse(request.body.read)['message']
      puts "< %s" % msg
      $client.publish '/fromserver', "You asked me to send: #{msg}"
    end

    get '/' do
      redirect '/index.html'
    end
  end

  Thin::Server.start App, '0.0.0.0', 3000
end

