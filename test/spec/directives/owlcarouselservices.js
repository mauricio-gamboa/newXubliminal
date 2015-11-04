'use strict';

describe('Directive: owlCarouselServices', function () {

  // load the directive's module
  beforeEach(module('xubliminalApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<owl-carousel-services></owl-carousel-services>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the owlCarouselServices directive');
  }));
});
