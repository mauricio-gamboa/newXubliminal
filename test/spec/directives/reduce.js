'use strict';

describe('Directive: reduce', function () {

  // load the directive's module
  beforeEach(module('xubliminalApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<reduce></reduce>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the reduce directive');
  }));
});
