'use strict';

describe('Service: xubServices', function () {

  // load the service's module
  beforeEach(module('xubliminalApp'));

  // instantiate service
  var xubServices;
  beforeEach(inject(function (_xubServices_) {
    xubServices = _xubServices_;
  }));

  it('should do something', function () {
    expect(!!xubServices).toBe(true);
  });

});
