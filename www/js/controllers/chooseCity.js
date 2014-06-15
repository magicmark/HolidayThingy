angular.module('starter.controllers')

.controller('ChooseCityCtrl', function($scope, Holiday, PN, $state) {

  $scope.next = false;

  // var changePage = function (page) {
  //   angular.forEach($scope.pageStates, function (value, key) {
  //     $scope.pageStates[key] = false;
  //   });
  //   $scope.pageStates[page] = true;
  // }

  $scope.cities = [
    { 'name': 'MANCHESTER' },
    { 'name': 'WARSAW' },
    { 'name': 'PARIS' },
    { 'name': 'CRACOW' },
    { 'name': 'LONDON' }
  ];

  $scope.selectCity = function (city) {
    Holiday.setCity(city);
    $scope.next = true;
  };

  $scope.goToBudget = function () {
    $state.go('chooseDates');
  };

});