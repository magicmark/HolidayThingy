angular.module('starter.services')

.service('Holiday', function () {
  
  var city = 'sdf';

  return {
    city:    function () { return city; },
    setCity: function (theCity) { city = theCity; }
  }

});