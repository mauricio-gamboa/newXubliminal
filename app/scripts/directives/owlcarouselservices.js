'use strict';

/**
 * @ngdoc directive
 * @name xubliminalApp.directive:owlCarouselServices
 * @description
 * # owlCarouselServices
 */
angular.module('xubliminalApp')
  .directive('owlCarouselServices', [function () {
    return {
      restrict: 'A',

      link: function (scope, element, attrs) {
        if (scope.$last === true) {
          var carousel = element.parent();

          carousel.owlCarousel({
            autoPlay: 5000,
            items: 4,
            stopOnHover: true
          })
        }
      }
    };
  }]);
