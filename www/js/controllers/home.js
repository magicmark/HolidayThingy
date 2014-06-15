angular.module('starter.controllers')

.controller('HomeCtrl', function($scope,$state,$http,ezfb,User) {

  $scope.startBooking = function()
  {
    $state.go('chooseCity');
  };
  
  $scope.myName = null;

  $scope.$watch(function(){
  		var isLogged = User.isLoggedIn();
  		return isLogged;
  	},function(newVal,oldVal) {
  		if(User.getUserData() != 'undefined')
  		{
		  	$scope.myName = User.getUserData().first_name;
  		}
  	},true
  );
  
});