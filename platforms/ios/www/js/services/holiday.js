angular.module('starter.services', [])

.service('Holiday', function () {
  
  var isLoggedIn = false;
  var data = {

  };

  return {
    isLoggedIn: function () { return loggedIn; },
    logIn:      function (userData) { 
      data = userData;
    }
  };

});