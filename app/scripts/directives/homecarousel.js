'use strict';

/**
 * @ngdoc directive
 * @name xubliminalApp.directive:homeCarousel
 * @description
 * # homeCarousel
 */
angular.module('xubliminalApp')
  .directive('homeCarousel', [function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var current = 1;
        var footerBgContainer = $('.bgs');

        element.carousel({
          interval: 7000,
          pause: false
        });

        element.on('slide.bs.carousel', function (e) {
          setFooterBackground((current % 5) + 1);
          current++;
        });

        function setFooterBackground(bgNumber) {
          var prev = footerBgContainer.find('.bg');

          setTimeout(function () {
            prev.remove();
          }, 4100);

          var el = document.createElement('div');
          el.className += 'bg bg' + bgNumber;

          footerBgContainer.append(el);

          setTimeout(function () {
            el.className += ' show';
          }, 20);
        }
      }
    };
  }]);
