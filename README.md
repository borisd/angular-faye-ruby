# Simple PubSub Demo

## Overview

This is a demo application with a PubSub server that shows how to communicate with a client (Frontend) from a Ruby application

## Backend

PubSub server with two entities:

PubSub server [Faye](http://faye.jcoglan.com/) with a [Redis](http://redis.io/) server as backend.

Sample backend server using a [Sinatra](http://www.sinatrarb.com/) app to show how messages can be received and sent from the server side.

## Frontend
Javascript sample based on [AngularJS](angularjs.org) and [Faye's client side library](http://faye.jcoglan.com/browser.html)

## Usage
Clone the repo and run it with:
> bundle exec ruby app.rb

You will need the following gems:

+ sinatra
+ faye 
+ faye-redis (from git not rubygems)
+ thin
+ json


## License
(The MIT License)

Copyright © 2013 Boris Dinkevich and contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software") to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

