'use strict';

/**
 * @ngdoc directive
 * @name xubliminalApp.directive:owlCarouselBrands
 * @description
 * # owlCarouselBrands
 */
angular.module('xubliminalApp')
  .directive('owlCarouselBrands', [function () {
    return {
      restrict: 'A',

      link: function (scope, element, attrs, controller) {
        element.owlCarousel({
          autoPlay: 3000,
          items: 6,
          itemsDesktop: [1199, 5],
          itemsDesktopSmall: [979, 4],
          pagination: false,
          stopOnHover: true,
          lazyLoad: true
        });
      }
    };
  }]);
