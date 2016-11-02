'use strict';

/**
 * @ngdoc function
 * @name slCodeApp.controller:SelectEmployeeCtrl
 * @description
 * # SelectEmployeeCtrl
 * Controller of the slCodeApp
 */
angular.module('slCodeApp')
  .controller('SelectEmployeeCtrl', function ($scope,$filter,$window,$uibModal) {
      var empArr={},userResp,thanksModalInstance;
      $scope.welcomeMailFlag=true;
      $scope.teamList=['Engineering','Executive','Finance','Sales'];
      $scope.data = [
        {team: 'Engineering', employees: ['Lawana Fan', 'Larry Rainer', 'Rahul Malik', 'Leah Shumway']},
        {team: 'Executive', employees: ['Rohan Gupta', 'Ronda Dean', 'Robby Maharaj']},
        {team: 'Finance', employees: ['Caleb Brown', 'Carol Smithson', 'Carl Sorensen']},
        {team: 'Sales', employees: ['Ankit Jain', 'Anjali Maulingkar']}
      ];

      $scope.setDropDownDataForEmployee= function setDropDownDataForEmployee(){
          if(!$scope.selectedTeam){
            $scope.employeeList=[];
          }else{
            empArr=$filter('filter')($scope.data,{team:$scope.selectedTeam});
            $scope.employeeList=(empArr.length && empArr[0].employees) || [];
          }
          $scope.employeeName='';
          $scope.employeeSelectError=false;
      };

      $scope.closeModal= function closeModal(){
        if($scope.employeeSelect.$dirty){
          userResp=$window.confirm('There are unsaved changes in modal window,You want to close?');
          if(userResp){
            $scope.$dismiss();
          }
        }else{
          $scope.$dismiss();
        }
      };

      $scope.submitData=function submitData(){
        if($scope.employeeList.indexOf($scope.employeeName) === -1){
          $scope.employeeSelectError=true;
        }else{
          $scope.$dismiss();
          thanksModalInstance=$uibModal.open({
            animation: true,
            backdrop  : 'static',
            keyboard  : false,
            templateUrl: 'views/thanks.html'
          });
          setTimeout(function(){
            thanksModalInstance.dismiss();
          },1300);
        }
      }

  });
