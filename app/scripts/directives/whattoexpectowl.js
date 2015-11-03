'use strict';

/**
 * @ngdoc directive
 * @name xubliminalApp.directive:whatToExpectOwl
 * @description
 * # whatToExpectOwl
 */
angular.module('xubliminalApp')
  .directive('whatToExpectOwl', [function () {
    return {
      restrict: 'A',

      link: function (scope, element, attrs) {
        element.owlCarousel({
          autoPlay: 8000,
          singleItem: true,
          stopOnHover: true,
          lazyLoad: true
        })
      }
    };
  }]);
