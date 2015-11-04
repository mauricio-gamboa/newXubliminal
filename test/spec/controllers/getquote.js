'use strict';

describe('Controller: GetquoteCtrl', function () {

  // load the controller's module
  beforeEach(module('xubliminalApp'));

  var GetquoteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GetquoteCtrl = $controller('GetquoteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GetquoteCtrl.awesomeThings.length).toBe(3);
  });
});
