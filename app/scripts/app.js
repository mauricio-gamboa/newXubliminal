'use strict';

/**
 * @ngdoc overview
 * @name xubliminalApp
 * @description
 * # xubliminalApp
 *
 * Main module of the application.
 */
angular
  .module('xubliminalApp', [
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })

      .when('/work', {
        templateUrl: 'views/work.html'
      })

      .when('/services', {
        templateUrl: 'views/services.html'
      })

      .when('/services/:service', {
        templateUrl: 'views/services.html'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
