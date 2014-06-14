angular.module('starter.controllers')

.controller('ChooseCtrl', function($scope, Holiday, PN) {

  //$scope.daddyState = "margin-top:0";

  $scope.pageStates = {
    'city'   : true,
    'budget' : false,
    'date'   : false
  };

  $scope.nexts = {
    'city'   : false,
    'budget' : false,
    'date'   : false
  }

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
    $scope.nexts.city = true;
  };

  $scope.goToBudget = function () {
    changePage('date');
  };

  // PN.sub(function (m) {
  //   alert("sfkjshfkjsf " + m);
  // });

  //
  // ============
  // Date Picker
  // ============
  //

  var getDays = function (n, m) {
    var obj = [];
    var k = 0;
    for  (var i = 0; i < 6; i++) {
      obj.push([]);
      for  (var j = 0; j < 7; j++) {
        if (k == m) obj[i].push(' ');
        else if (i == 0) obj[i].push((j < n) ? ' ' : ++k);
        else obj[i].push(++k);
      }
    } 
    return obj;
  };

  // $scope.selfrom = {};
  // $scope.sel     = {};
  // for (i = 0; i < 32; i++) {
  //   $scope.selfrom[i] = false;
  //   $scope.sel[i]     = false;
  // }

  $scope.days = getDays(6, 30);

  $scope.from = 0;

  $scope.clickDay = function(e) {
    if ($scope.from == 0) {
      angular.element(document.querySelector('#d'+e)).addClass('selectFrom');
      $scope.from = e;
    } else {
      for (i = $scope.from; i <= e; i++) {
        angular.element(document.querySelector('#d'+i)).addClass('selected');        
      }
    $scope.nexts.date = true;
    }
  };



});