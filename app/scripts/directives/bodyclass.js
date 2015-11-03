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
          var path = current.originalPath,
            klass = path + '-page',
            cleanedClass = '';

          if (path == '/')
            cleanedClass = 'home-page';
          else
            cleanedClass = klass.replace('/', '');

          element.removeClass().addClass(cleanedClass);
        });
      }
    };
  }]);
