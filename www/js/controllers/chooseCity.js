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

  var selectCity = function (city) {
    Holiday.setCity(city);
    $scope.next = true;
    $scope.$apply();
  };

  var goToBudget = function () {
    $state.go('chooseDates');
  }

  $scope.cities = [
    { 'name': 'MANCHESTER' },
    { 'name': 'WARSAW' },
    { 'name': 'PARIS' },
    { 'name': 'CRACOW' },
    { 'name': 'LONDON' }
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