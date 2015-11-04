'use strict';

describe('Directive: owlCarouselRepeat', function () {

  // load the directive's module
  beforeEach(module('xubliminalApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<owl-carousel-repeat></owl-carousel-repeat>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the owlCarouselRepeat directive');
  }));
});
