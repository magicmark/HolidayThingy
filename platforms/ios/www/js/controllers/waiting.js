angular.module('starter.controllers')

.controller('WaitCtrl', function($scope,$state,$http, User, PN, $timeout, $location, Data) {

  var saveData = function (d) {
    Data.setHotels(d.hotels);
    Data.setFlights(d.flights);
  };

  if ($location.path().indexOf("downloading") != -1) {
    $http({
      method: 'GET', 
      url: 'js/serverData.json'
    }).
    success(function(data, status, headers, config) {
      $timeout(function () {
        saveData(data);
        PN.pub('waiting', 'loadedData', data);     
        $state.go('bookHotel');
      // hotels  = data.hotels;
      // flights = data.flights;
        }, 5000);
    }).
    error(function(data, status, headers, config) {

      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }

  PN.sub(function (m) {
    if (m.page == 'waiting') {
      if (m.action == 'loadedData') {
        saveData(m.val);
        $state.go('bookHotel');
      }
    }
  });



});