angular.module('starter.services')

.service('Data', function ($http, $q) {
  
  var hotels  = null;
  var flights = null;

  return {
    setHotels: function (hotelData) { 
      hotels = hotelData;
    },
    setFlights: function (flightData) { 
      flights = flightData;
    },
    getHotels:  function() { return hotels; },
    getFlights: function() { return flights; }
  };

});