'use strict';

describe('Directive: homeCarousel', function () {

  // load the directive's module
  beforeEach(module('xubliminalApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<home-carousel></home-carousel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the homeCarousel directive');
  }));
});
