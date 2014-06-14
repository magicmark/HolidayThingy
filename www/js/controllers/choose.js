angular.module('starter.controllers')

.controller('ChooseCtrl', function($scope, Holiday, PN) {

  //$scope.daddyState = "margin-top:0";

  $scope.pageStates = {
    'city'   : true,
    'budget' : false,
    'date'   : false
  };

  var changePage = function (page) {
    angular.forEach($scope.pageStates, function (value, key) {
      $scope.pageStates[key] = false;
    });
    $scope.pageStates[page] = true;
  }

  $scope.cities = [
    { 'name': 'MANCHESTER' },
    { 'name': 'WARSAW' },
    { 'name': 'PARIS' },
    { 'name': 'CRACOW' },
    { 'name': 'LONDON' }
  ];

  $scope.selectCity = function (city) {
    Holiday.setCity(city); 
  };

  $scope.goToBudget = function () {
    changePage('date');
  };

  // PN.sub(function (m) {
  //   alert("sfkjshfkjsf " + m);
  // });


});