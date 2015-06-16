'use strict';


var app = angular.module('fireApp');
/*
  .config(['$stateProvider', 'SECURED_STATES', function($stateProvider, SECURED_STATES) {
    // credits for this idea: https://groups.google.com/forum/#!msg/angular/dPr9BpIZID0/MgWVluo_Tg8J
    // unfortunately, a decorator cannot be use here because they are not applied until after
    // the .config calls resolve, so they can't be used during state configuration, so we have
    // to hack it directly onto the $stateProvider object
    $stateProvider.whenAuthenticated = function(path, state) {
      state.resolve = state.resolve || {};
      state.resolve.user = ['Auth', function(Auth) {
        return Auth.$requireAuth();
      }];
      $stateProvider.when(path, state);
      SECURED_STATES[path] = true;
      return $stateProvider;
    };
  }])*/


  app.config(function($stateProvider, $urlRouterProvider){


  $stateProvider

    .state('home',{
      url: '/',
      templateUrl: '/views/home.html',
      controller: 'SecureCtrl'
    })

    .state('login',{
      url: '/login',
      templateUrl: '/views/login.html',
      controller: 'LoginCtrl'
    })

    .state('logout', {
      url: '/logout',
      templateUrl: '/views/logout.html',
      resolve: {
        logout: function(authService){
          ref.unauth();
        }
      },
      controller: 'LoginCtrl'
    })

    .state('chat', {
      url: '/chat',
      templateUrl: '/views/chat.html',
      resolve: {
        isLoggedIn: function(authService){
        return authService.isLoggedIn();
        }
      },
      controller: 'ChatCtrl'
    })

    .state('account', {
      url: '/account',
      templateUrl: '/views/account.html',
      resolve: {
        isLoggedIn: function(authService){
        return authService.isLoggedIn();
        }
      },
      controller: 'AccountCtrl'
    })

      .state('register', {
      url: '/register',
      templateUrl: '/views/register.html',
      resolve: {
        isLoggedIn: function(authService){
        return authService.isLoggedOut();
        }
      },
      controller: 'RegisterCtrl'

    })
/*

    .run(['$rootScope', '$location', 'Auth', 'SECURED_STATES', 'loginRedirectPath',
    function($rootScope, $location, Auth, SECURED_STATES, loginRedirectPath) {
      // watch for login status changes and redirect if appropriate
      Auth.$onAuth(check);

      // some of our STATES may reject resolve promises with the special {authRequired: true} error
      // this redirects to the login page whenever that is encountered
      $rootScope.$on('$routeChangeError', function(e, next, prev, err) {
        if( err === 'AUTH_REQUIRED' ) {
          $location.path(loginRedirectPath);
        }
      });

      function check(user) {
        if( !user && authRequired($location.path()) ) {
          $location.path(loginRedirectPath);
        }
      }

      function authRequired(path) {
        return SECURED_STATES.hasOwnProperty(path);
      }
    }
  ])

  .constant('SECURED_STATES', {});

*/

$urlRouterProvider.otherwise('/');

});


