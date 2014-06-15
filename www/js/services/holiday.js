angular.module('starter.services')

.service('Holiday', function () {
  
  var city = '';
  var min = 0;
  var max = 0;
  var currency = '';
  var hotel = '';
  
  return {
    city:     function () { return city; },
    hotel:    function () { return hotel; },
    setCity:  function (theCity)  { city  = theCity; },
    setHotel: function (theHotel) { hotel = theHotel },
  	setRange: function (newMin,newMax,newCurrency) {
		min = newMin;
		max = newMax;
		currency = newCurrency;
   }
  };

});