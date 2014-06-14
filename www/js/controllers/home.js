angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope,$state,$http) {

<<<<<<< HEAD
	$scope.login = function () {
		/**
		 * Calling FB.login with required permissions specified
		 * https://developers.facebook.com/docs/reference/javascript/FB.login/v2.0
		 */
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
      $scope.loginStatus = res;

      (more || angular.noop)();
    });
  }

=======
  // $scope.startBooking = function()
  // {
  //   $state.go('')
  // }

  // $scope.rightButtons = rightButtons;
>>>>>>> 866937b304618e254cc2cbad4bad694a8216eb83

});