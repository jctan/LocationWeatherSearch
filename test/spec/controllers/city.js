'use strict';

describe('Controller: CityCtrl', function () {

  // load the controller's module
  beforeEach(module('localweatherApp'));

  var CityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CityCtrl = $controller('CityCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('This should get the city', function () {
    expect(scope.zip).toBe('10002');
  });
});
