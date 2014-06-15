angular.module('starter.controllers')

.controller('BookHotelCtrl', function($scope, Holiday, PN, $state) {

  $scope.hotels = [
    {
      'name':   'Hotel Habbo',
      'price':  500,
      'rating': 3
    },
    {
      'name':   'Marks Hotel',
      'price':  400,
      'rating': 1
    },
    {
      'name':   'Fawlty Towers',
      'price':  165,
      'rating': 4
    }
  ];

  var numHotels = 3;

  $scope.sliders = {
    'hc1' : {
      'curr' : 1,
      '1': true,
      '2': false,
      '3': false,
    },
    'hc2' : {
      'curr' : 2,
      '1': false,
      '2': true,
      '2': false
    },
    'hc3' : {
      'curr' : 3,
      '1': false,
      '2': false,
      '3': true
    }
  };

  $scope.doSwipe = function(direction, which) {
    alert('which: ' + which + ', direction: ' + direction);
    var newnum = 0;
    if (direction == 'up') {
       newnum = $scope.sliders[which].curr - 1;
      if (newnum == 0) newnum = numHotels;
      alert('nn: ' + newnum);
    }
    for (i = 0; i < numHotels; i++) {
      $scope.sliders[which][i+1] = false;
    }
    $scope.sliders[which][newnum] = true;
    alert(JSON.stringify($scope.sliders[which]));
    $scope.sliders[which].curr = newnum;
    $scope.$apply();
  };

}).directive('detectGesturesHotel', function($ionicGesture) {
  return {
    link : function(scope, elem, attrs) {
      $ionicGesture.on('swipeup', function() {
        scope.doSwipe('up', angular.element(elem).attr('id'));
        scope.$apply();
      }, elem);
    }
   }
});