'use strict';

/**
 * @ngdoc directive
 * @name xubliminalApp.directive:bodyClass
 * @description
 * # bodyClass
 */
angular.module('xubliminalApp')
  .directive('bodyClass', [function () {
    return {

      restrict: 'A',

      link: function (scope, element) {
        scope.$on('$routeChangeSuccess', function (event, current) {
          var path = current.originalPath;
          var klass = path + '-page';
          var cleanedClass = '';

          if (path == +'/') {
            cleanedClass = 'home-page';
          } else if (path === '/services/:service') {
            cleanedClass = 'services-page';
          } else {
            cleanedClass = klass.replace('/', '');
          }

          element.removeClass().addClass(cleanedClass);
        });
      }
    };
  }]);
