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

      .otherwise({
        redirectTo: '/'
      });
  });
