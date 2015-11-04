'use strict';

describe('Directive: bounce', function () {

  // load the directive's module
  beforeEach(module('xubliminalApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bounce></bounce>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bounce directive');
  }));
});
