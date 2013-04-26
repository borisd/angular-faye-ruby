var FayeServerURL = 'http://example.com:3001/faye'

var app = angular.module('myApp', []);

// Simple Faye service
app.factory('Faye', function() {
  var client = new Faye.Client(FayeServerURL);

  return {
    publish: function(channel, message) {
      client.publish(channel, message);
    },

    subscribe: function(channel, callback) {
      client.subscribe(channel, callback);
    }
  }
});

function FayeCtrl($scope, $http, Faye) {
  $scope.messages = [];
  $scope.messages.add = function(direction, message) {
    this.push( { direction: direction, text: message });
  }
    
  // Listen to data coming from the server via Faye
  Faye.subscribe('/fromserver', function(msg) {
    $scope.$apply(function() {
      $scope.messages.add('incoming', msg);
    });
  });

  // Post the data to the server and have it send to us
  $scope.sendServer = function() {
    $http.post('/', { foo: 'asd', message: $scope.message })
      .success(function() {
        $scope.message = '';
      })
      .error(function(data, status) {
        $scope.messages.add('error', "Error doing POST to server: " + status);
      });
  };

  // Send data to server via Faye
  $scope.sendClient = function() {
    Faye.publish('/fromclient', $scope.message);
    $scope.messages.add('outgoing', $scope.message);
    $scope.message = '';
  };
}

