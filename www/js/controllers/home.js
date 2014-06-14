angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope,$state,$http) {

  $scope.startBooking = function()
  {
    $state.go('')
  }

  $scope.rightButtons = rightButtons;

});