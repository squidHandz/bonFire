var app = angular.module('fireApp');

app.service('firebaseService', function ($firebase, $firebaseObject, $firebaseArray) {
  var firebaseUrl = 'https://intense-heat-1789.firebaseio.com';

  this.getUser = function(userId){
    return $firebaseObject(new Firebase(firebaseUrl + 'users/' + userId));
  };

  this.getThings = function(userId){
    return $firebaseArray(new Firebase(firebaseUrl + 'users/' + userId + '/things'));
  }
})