angular.module('starter.services', [])

.service('User', function () {
  
  var isLoggedIn = false;
  var data = {

  }

  return {
    isLoggedIn: function () { return loggedIn; },
    logIn:      function (userData) { 
      data = userData;
    }
  }

});