angular.module('starter.controllers', [])

.controller('ChooseCtrl', function($scope,$state,$http) {

  pubnub.subscribe({
    channel : "state",
    message : function(m){ alert(m) },
    connect : publish
  });


  // $scope.startBooking = function() {
  //   $state.go('chooseCity');
  // };

  //$scope.startBooking = rightButtons;

});