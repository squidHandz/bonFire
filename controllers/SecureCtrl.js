var app = angular.module('fireApp');

app.controller('SecureCtrl', function($scope, $state, authService){
  authService.isLoggedIn && $state.go('login');
  
});