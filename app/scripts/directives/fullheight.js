'use strict';

/**
 * @ngdoc directive
 * @name xubliminalApp.directive:fullHeight
 * @description
 * # fullHeight
 */
angular.module('xubliminalApp')
  .directive('fullHeight', ['$window', function ($window) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs, controller) {
        var height = $window.innerHeight;

        element.css({
          'height': height
        });

        $(window).resize(function () {
          var newHeight = $window.innerHeight;

          element.css({
            'height': newHeight
          });
        });
      }
    };
  }]);
