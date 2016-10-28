'use strict';

/**
 * @ngdoc function
 * @name slCodeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the slCodeApp
 */
angular.module('slCodeApp')
  .controller('MainCtrl', function ($scope, $uibModal) {

    $scope.openModalWindow = function openModalWindow() {
      $uibModal.open({
        animation: true,
        backdrop  : 'static',
        keyboard  : false,
        templateUrl: 'views/modal-window.html',
        controller:'SelectEmployeeCtrl'
      });
    };

  });
