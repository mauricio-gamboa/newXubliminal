'use strict';

/**
 * @ngdoc directive
 * @name xubliminalApp.directive:owlCarouselRepeat
 * @description
 * # owlCarouselRepeat
 */
angular.module('xubliminalApp')
  .directive('owlCarouselRepeat', [function () {
    return {
      restrict: 'A',

      link: function (scope, element, attrs) {
        if (scope.$last === true) {

          var showPagination = true;

          if (attrs.pagination)
            if (attrs.pagination == 'false') showPagination = false;

          var carousel = element.parent();

          carousel.owlCarousel({
            autoPlay: 8000,
            singleItem: true,
            stopOnHover: true,
            lazyLoad: true,
            pagination: showPagination
          })
        }
      }
    };
  }]);
