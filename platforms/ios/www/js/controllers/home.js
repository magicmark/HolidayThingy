angular.module('starter.controllers')

.controller('HomeCtrl', function($scope,$state,$http,ezfb) {

  $scope.startBooking = function()
  {
    $state.go('chooseCity');
  }
});