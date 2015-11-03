'use strict';

/**
 * @ngdoc directive
 * @name xubliminalApp.directive:goto
 * @description
 * # goto
 */
angular.module('xubliminalApp')
  .directive('goto', [function () {
    return {
      restrict: 'A',

      link: function (scope, element, attrs, controller) {
        element.on('click', function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            var headerHeight = $('header').css('height').replace('px', '') * 1;

            if (isNaN(headerHeight)) headerHeight = 0;

            if (target.length) {
              $('html,body').animate({scrollTop: target.offset().top - headerHeight}, 1000);
              return false;
            }
          }
        });
      }
    };
  }]);
