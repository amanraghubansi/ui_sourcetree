'use strict';

describe('Controller: SelectEmployeeCtrl', function () {

  // load the controller's module
  beforeEach(module('slCodeApp'));

  var SelectEmployeeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SelectEmployeeCtrl = $controller('SelectEmployeeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
