angular.module('starter.controllers')

.controller('ChooseDatesCtrl', function($scope, Holiday, PN, $state, Data) {

  PN.sub(function (m) {
    if (m.page == 'chooseDates') {
      if (m.action == 'selectDate') clickDay(m.val);
      if (m.action == 'goToWait') startWait();
    }
  });


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

  $scope.btnClickDay = function(e) {
    PN.pub('chooseDates', 'selectDate', e);
    clickDay(e);
  };

  var clickDay = function(e) {
    if ($scope.from == e) return;
    if ($scope.from == 0) {
      angular.element(document.querySelector('#d'+e)).addClass('selectFrom');
      $scope.from = e;
    } else {
      for (i = $scope.from; i <= e; i++) {
        angular.element(document.querySelector('#d'+i)).addClass('selected');
      }
      $scope.next = true;
      $scope.$apply();
    }
  };

  $scope.btnStartWait = function () {
    PN.pub('chooseDates', 'goToWait', '');     
    $state.go('downloading');
  };

  var startWait = function () {
    $state.go('waiting');
  };

});