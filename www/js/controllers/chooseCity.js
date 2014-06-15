angular.module('starter.controllers')

.controller('ChooseCityCtrl', function($scope, Holiday, PN, $state) {

  $scope.next = false;

  // var changePage = function (page) {
  //   angular.forEach($scope.pageStates, function (value, key) {
  //     $scope.pageStates[key] = false;
  //   });
  //   $scope.pageStates[page] = true;
  // }

  PN.sub(function (m) {
    if (m.page == 'chooseCity') {
      if (m.action == 'selectCity') selectCity(m.val);
      if (m.action == 'goToBudget') {
        if (Holiday.city() == '') selectCity(m.val);
        goToBudget();
      }
    }
  });

  $scope.selectedCity = Holiday.city();

  var selectCity = function (city) {
    $scope.selectedCity = city;
    Holiday.setCity(city);
    $scope.next = true;
    $scope.$apply();
  };

  var goToBudget = function () {
    $state.go('chooseBudget');
  }

  $scope.cities = [
    { 'name': 'MANCHESTER','file' : 'manchester.png' },
    { 'name': 'WARSAW'    ,'file' : 'warsaw.png'},
    { 'name': 'PARIS'     ,'file' : 'paris.png'},
    { 'name': 'CRACOW'    ,'file' : 'krakow.png'},
    { 'name': 'LONDON'    ,'file' : 'london.png'}
  ];

  $scope.btnSelectCity = function (city) {
    PN.pub('chooseCity', 'selectCity', city);
    selectCity(city);
  };

  $scope.btnGoToBudget = function () {
    PN.pub('chooseCity', 'goToBudget', Holiday.city());
    goToBudget();
  };

});