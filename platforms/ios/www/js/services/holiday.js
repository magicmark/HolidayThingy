angular.module('starter.services')

.service('Holiday', function () {
  
  var city = '';
  var min = 0;
  var max = 0;
  var currency = '';

  return {
  	setRange: function (newMin,newMax,newCurrency) {
  		min = newMin;
  		max = newMax;
  		currency = newCurrency;
  	   },
    city:     function () { return city; },
    setCity:  function (theCity) { city = theCity; }
  }

});