angular.module('starter.controllers')

.controller('ChooseDatesCtrl', function($scope, Holiday, PN, $state) {

  $scope.next = false;

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
      $scope.next = true;
    }
  };

  $scope.sendData = function () {
    $
  }



});