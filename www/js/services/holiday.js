angular.module('starter.services')

.service('Holiday', function () {
  
  var city = '';
  var min = 0;
  var max = 0;
  var currency = '';
  var hotel = '';
  var start = '2014-06-14';
  var end = '2014-06-20';

  return {
    city:     function () { return city; },
    hotel:    function () { return hotel; },
    setCity:  function (theCity)  { city  = theCity; },
    setHotel: function (theHotel) { hotel = theHotel },
  	setRange: function (newMin,newMax,newCurrency) {
  		min = newMin;
  		max = newMax;
  		currency = newCurrency;
    },
    getMax: function() { return max }
    // ,
    // getDates: function () { 
    //   return {
    //     'start': start,
    //     'end'  : end
    //   }
    // } 
  };

});