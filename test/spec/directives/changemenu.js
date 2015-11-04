'use strict';

describe('Directive: changeMenu', function () {

  // load the directive's module
  beforeEach(module('xubliminalApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<change-menu></change-menu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the changeMenu directive');
  }));
});
