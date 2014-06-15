angular.module('starter.controllers')

.controller('BookFlightsCtrl', function($scope, Holiday, PN, $state) {

  $scope.flights = [
    {
      'price' : 400,
      'currency' : 'btc',
      'date' : '16/06',
      'stops': [
        { 'time': '18.55', 'stop': 'MAN - Manchester Airport' },
        { 'time': '06.45', 'stop': 'LHR - Heathrow Airport' },
        { 'time': '10.05', 'stop': 'WAW - Warsaw Airport' }
      ]
    },
    {
      'price' : 400,
      'currency' : 'btc',
      'date' : '16/06',
      'stops': [
        { 'time': '18.55', 'stop': 'MAN - Manchester Airport' },
        { 'time': '06.45', 'stop': 'LHR - Heathrow Airport' },
        { 'time': '10.05', 'stop': 'WAW - Warsaw Airport' }
      ]
    },
    {
      'price' : 400,
      'currency' : 'btc',
      'date' : '16/06',
      'stops': [
        { 'time': '18.55', 'stop': 'MAN - Manchester Airport' },
        { 'time': '06.45', 'stop': 'LHR - Heathrow Airport' },
        { 'time': '10.05', 'stop': 'WAW - Warsaw Airport' }
      ]
    },
    {
      'price' : 400,
      'currency' : 'btc',
      'date' : '16/06',
      'stops': [
        { 'time': '18.55', 'stop': 'MAN - Manchester Airport' },
        { 'time': '06.45', 'stop': 'LHR - Heathrow Airport' },
        { 'time': '10.05', 'stop': 'WAW - Warsaw Airport' }
      ]
    }
  ];



  $scope.btnSelectFlight = function(n)
  {
    $scope.selectedFlightIndex = n;
    $scope.next = true;
  }


  $scope.goToPayment = function()
  {
    $state.go('payment');
  }

  // PN.sub(function (m) {
  //   if (m.page == 'chooseHotel') {
  //     if (m.action == 'selectHotel') selectHotel(m.val);
  //     if (m.action == 'goToFlights') {
  //       if (Holiday.hotel() == '') selectHotel(m.val);
  //       goToFlights();
  //     }
  //   }
  // });

});