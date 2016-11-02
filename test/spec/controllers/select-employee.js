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
    scope.teamList=['Engineering','Executive','Finance','Sales'];
    scope.data = [
      {team: 'Engineering', employees: ['Lawana Fan', 'Larry Rainer', 'Rahul Malik', 'Leah Shumway']},
      {team: 'Executive', employees: ['Rohan Gupta', 'Ronda Dean', 'Robby Maharaj']},
      {team: 'Finance', employees: ['Caleb Brown', 'Carol Smithson', 'Carl Sorensen']},
      {team: 'Sales', employees: ['Ankit Jain', 'Anjali Maulingkar']}
    ];

    scope.$dismiss= function(){
      console.log('simulated $dismiss function for controller');
    }

  }));

  it('suggestion list should be empty', function () {
    scope.selectedTeam='Engg';
    scope.setDropDownDataForEmployee();
    expect(scope.employeeList.length).toBe(0);
  });

  it('suggestion list should contain 4 enteries', function () {
    scope.selectedTeam='Engineering';
    scope.setDropDownDataForEmployee();
    expect(scope.employeeList.length).toBe(4);
  });

  it('should not throw employee name selected for team error', function () {
    scope.selectedTeam='Engineering';
    scope.setDropDownDataForEmployee();
    scope.employeeName='Larry Rainer';
    scope.submitData();
    expect(scope.employeeSelectError).toBe(false);
  });

  it('should throw employee name selected for team error', function () {
    scope.selectedTeam='Engineering';
    scope.setDropDownDataForEmployee();
    scope.employeeName='Larry Rainer11';
    scope.submitData();
    expect(scope.employeeSelectError).toBe(true);
  });


});
