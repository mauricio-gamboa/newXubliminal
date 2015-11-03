'use strict';

describe('Directive: increase', function () {

  // load the directive's module
  beforeEach(module('xubliminalApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<increase></increase>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the increase directive');
  }));
});
