'use strict';

/**
 * @ngdoc directive
 * @name xubliminalApp.directive:reduce
 * @description
 * # reduce
 */
angular.module('xubliminalApp')
  .directive('reduce', [function () {
    return {
      restrict: 'A',

      link: function (scope, element, attrs, controller) {
        var $window = $(window);
        var $body = $(document.body);
        var $html = $('html');
        var $use = ((bowser.firefox || bowser.msie) ? $html : $body);

        try {
          $window.scroll(function () {
            if ($use) {
              if ($use.scrollTop()) {
                element.addClass('reduce');
                $('#page-title').fadeOut();
              } else {
                element.removeClass('reduce');
                $('#page-title').fadeIn();
              }
            }
          });
        } catch (e) {
          console.log(e);
        }
      }
    };
  }]);
