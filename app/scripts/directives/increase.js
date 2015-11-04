'use strict';

/**
 * @ngdoc directive
 * @name xubliminalApp.directive:increase
 * @description
 * # increase
 */
angular.module('xubliminalApp')
  .directive('increase', [function () {
    return {
      restrict: 'A',

      scope: {
        val: "=",
        interval: "="
      },

      link: function (scope, element, attrs, controller) {
        var value = scope.val * 1;
        element.text(numberWithCommas(value));

        setInterval(function () {
          value += 1;
          element.text(numberWithCommas(value));
        }, scope.interval);

        function numberWithCommas(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      }
    };
  }]);
