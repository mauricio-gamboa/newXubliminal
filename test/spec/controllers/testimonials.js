'use strict';

describe('Controller: TestimonialsCtrl', function () {

  // load the controller's module
  beforeEach(module('xubliminalApp'));

  var TestimonialsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestimonialsCtrl = $controller('TestimonialsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TestimonialsCtrl.awesomeThings.length).toBe(3);
  });
});
