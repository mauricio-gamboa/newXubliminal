'use strict';

/**
 * @ngdoc directive
 * @name xubliminalApp.directive:bounce
 * @description
 * # bounce
 */
angular.module('xubliminalApp')
  .directive('bounce', [function () {
    return {
      restrict: 'A',

      link: function (scope, element, attrs, controller) {
        setInterval(function () {
          element.toggleClass('bounce');
        }, 1200);
      }
    };
  }]);
