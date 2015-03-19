'use strict';

describe('Controller: MaterialFormCtrl', function () {

  // load the controller's module
  beforeEach(module('appPruebaMaterialApp'));

  var MaterialFormCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MaterialFormCtrl = $controller('MaterialFormCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
