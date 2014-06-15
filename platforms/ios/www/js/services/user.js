angular.module('starter.services')

.service('User', function () {
  
  var loggedIn = false;
  var fbdata = null;

  return {
    logIn:      function (userData) { 
      loggedIn = true;
      fbdata   = userData;
    },
    isLoggedIn:  function() { return loggedIn; },
    getUserData: function() { return fbdata; }

  };

});