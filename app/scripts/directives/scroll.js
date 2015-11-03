'use strict';

/**
 * @ngdoc directive
 * @name xubliminalApp.directive:scroll
 * @description
 * # scroll
 */
angular.module('xubliminalApp')
  .directive('scroll', [function () {
    return {
      restrict: 'A',
      scope: false,

      link: function (scope, element, attrs, controller) {
        var $window = $(window);
        var $body = $(document.body);
        var $html = $('html');
        var $both = $html.add($body);
        var $use = ((bowser.firefox || bowser.msie) ? $html : $body);
        var $header = $('header');
        var $toggle = element.find('.scroll-down a');
        var $content = element.next();
        var $carousel = element.find('#home-carousel');
        var previousScrollPosition = 0;

        try {
          $window.scroll(function () {
            if ($use) {
              if ($use.scrollTop() > 0) {
                $toggle.fadeOut();
                $carousel.fadeOut();
              } else {
                $toggle.fadeIn();
                $carousel.fadeIn();
              }
            }
          });
        } catch (e) {
          console.log(e);
        }

        var toggleActive = false;

        $toggle.click(function () {

          toggleActive = true;

          $both.animate({
            scrollTop: $content.offset().top
          }, {
            duration: 800,
            easing: 'linear',
            complete: function () {
              toggleActive = false;
            }
          });
        });

        if (!('ontouchstart' in window) && !('onmsgesturechange' in window) && !bowser.msie) {
          var animating = false;

          var delta = function (e) {
            var evt = e.originalEvent;

            var delta = evt.detail ? evt.detail * (-120) : evt.wheelDelta;

            return delta;
          };

          $window.scroll(function (e) {

            if ($use) {
              var currentScrollPosition = $use.scrollTop();

              if (animating) {
                e.preventDefault();
                return;
              }

              var deltas = [];

              var isMagicMouseFunction = function (e) {
                e.preventDefault();
                e.returnValue = false;

                var d = delta(e);

                deltas.push(d);

                return false;
              };

              if (!toggleActive && previousScrollPosition === 0 && currentScrollPosition >= 0) {
                $body.on('mousewheel', isMagicMouseFunction);

                $both.animate({
                  scrollTop: $content.offset().top
                }, {
                  duration: 800,
                  easing: 'linear',
                  complete: function () {
                    setTimeout(function () {
                      animating = false;
                      $body.off('mousewheel', isMagicMouseFunction);
                    }, deltas.length > 10 ? 500 : 0);
                  }
                });
              }

              previousScrollPosition = currentScrollPosition;
            }
          });
        }

        scope.$on('$destroy', function () {
          $window = null;
          $body = null;
          $html = null;
          $both = null;
          $use = null;
          $toggle = null;
          $content = null;
          previousScrollPosition = null;
          toggleActive = null;
        });
      }
    };
  }]);
