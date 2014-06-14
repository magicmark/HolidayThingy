angular.module('starter.controllers', [])

.controller('ChooseCtrl', function($scope,$state,$http) {

  $scope.startBooking = function()
  {
    $state.go('chooseCity');
  }

  //$scope.startBooking = rightButtons;

});