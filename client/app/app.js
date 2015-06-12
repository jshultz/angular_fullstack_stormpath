'use strict';

angular.module('dashboardApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'stormpath',
  'stormpath.templates'
])
  .run(function($stormpath){
    $stormpath.uiRouter({
      loginState: 'login',
      defaultPostLoginState: 'main'
    });
  })
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
