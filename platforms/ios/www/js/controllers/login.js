angular.module('starter.controllers')

.controller('LoginCtrl', function($scope,$state,$http,ezfb) {


	$scope.alertAdada = function()
	  {
		  console.log(document.URL);
	  }

	$scope.facebookLogin = function() {
    /**
     * Calling FB.login with required permissions specified
     * https://developers.facebook.com/docs/reference/javascript/FB.login/v2.0
     */
    console.log("FaceBook Login 1 call");

    ezfb.login(function (res) {
      /**
       * no manual $scope.$apply, I got that handled
       */
      if (res.authResponse) {
        updateLoginStatus(updateApiMe);
      }
    }, {scope: 'email,user_likes'});
  };

  /**
   * Update loginStatus result
   */
  function updateLoginStatus (more) {
    ezfb.getLoginStatus(function (res) {
      if (res.status === 'connected')
      {
        $state.go('home')
      } else if (res.status === 'not_authorized') {
        alert('BIJACZ WHY NOT');
      }
      else
      {
        alert('GO HOME MILFOOO');
      }
      $scope.loginStatus = res;
      (more || angular.noop)();
    });
  }

  /**
   * Update api('/me') result
   */
  function updateApiMe () {
    ezfb.api('/me', function (res) {
      $scope.apiMe = res;
      console.log(res);
    });
  }

});