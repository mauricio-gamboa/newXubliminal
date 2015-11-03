'use strict';

/**
 * @ngdoc directive
 * @name xubliminalApp.directive:changeMenu
 * @description
 * # changeMenu
 */
angular.module('xubliminalApp')
  .directive('changeMenu', [function () {
    return {
      restrict: 'A',

      link: function (scope, element) {
        var $window = $(window);
        var $body = $(document.body);
        var $html = $('html');
        var $use = ((bowser.firefox || bowser.msie) ? $html : $body);
        var headerHeight = $('header').outerHeight();

        try {
          $window.scroll(function () {
            if ($use) {
              var marginTop = element.css('margin-top').replace('px', '') * 1;
              var marginBottom = element.css('margin-bottom').replace('px', '') * 1;
              var height = (element.outerHeight() - headerHeight) + marginBottom + marginTop;

              if ($use.scrollTop() > (height))
                $body.addClass('dark');
              else
                $body.removeClass('dark');
            }
          });
        } catch (e) {
          console.log(e);
        }
      }
    };
  }]);
