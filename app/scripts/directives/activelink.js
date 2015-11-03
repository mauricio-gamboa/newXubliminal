'use strict';

/**
 * @ngdoc directive
 * @name xubliminalApp.directive:activeLink
 * @description
 * # activeLink
 */
angular.module('xubliminalApp')
  .directive('activeLink', ['$location', function (location) {
    return {
      restrict: 'A',

      link: function (scope, element, attrs, controller) {
        var path = attrs.href;
        path = path.substring(1);
        scope.location = location;

        scope.$watch('location.path()', function (newPath) {
          if (path === newPath)
            element.parent().addClass('active');
          else if (path == '/services' && newPath.indexOf('/services/') != -1)
            element.parent().addClass('active');
          else
            element.parent().removeClass('active');
        });
      }
    };
  }]);
