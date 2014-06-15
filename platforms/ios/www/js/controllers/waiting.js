angular.module('starter.controllers')

.controller('WaitCtrl', function($scope,$state,$http, User, $timeout, $location) {

  alert('waiting... ' + $location.path());


  if ($location.path().indexOf("downloading") != -1) {
    $http({
      method: 'GET', 
      url: 'js/serverData.json'
    }).
    success(function(data, status, headers, config) {
      $timeout(function () {
          alert('got stf');
          alert(data);
      // hotels  = data.hotels;
      // flights = data.flights;
        }, 5000);
    }).
    error(function(data, status, headers, config) {
      alert('error');
      alert(data);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }

});