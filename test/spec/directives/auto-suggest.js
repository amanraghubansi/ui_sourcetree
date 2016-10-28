'use strict';

describe('Directive: autoSuggest', function () {

  // load the directive's module
  beforeEach(module('slCodeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<auto-suggest></auto-suggest>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the autoSuggest directive');
  }));
});
