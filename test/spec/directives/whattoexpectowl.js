'use strict';

describe('Directive: whatToExpectOwl', function () {

  // load the directive's module
  beforeEach(module('xubliminalApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<what-to-expect-owl></what-to-expect-owl>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the whatToExpectOwl directive');
  }));
});
