angular.module('starter.services')

.service('Holiday', function () {
  
  var city = '';
  var hotel = '';
  return {
    city:     function () { return city; },
    hotel:    function () { return hotel; },
    setCity:  function (theCity)  { city  = theCity; },
    setHotel: function (theHotel) { hotel = theHotel }
  }

});