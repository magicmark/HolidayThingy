angular.module('starter.controllers')

.controller('ChooseBudgetCtrl', 
	function($scope, $state) {
		$scope.minValue = 1;
		$scope.maxValue = 2;
		$scope.currency = "BitCoins";

}).directive('detectGestures', function($ionicGesture) {
  return {
    link : function(scope, elem, attrs) {

      //var gestureType = attrs.gestureType;
      //alert(gestureType);
      $ionicGesture.on('swiperight',
            function(){alert("swipeRight!");}, elem);

      /*
      switch(gestureType) {
        case 'swiperight':
          
          break;
        case 'swipeleft':
          $ionicGesture.on('swipeleft', 
          	function(){alert("swipeRight!");}, elem);
          break;
      }
      */
  	}
   }
});