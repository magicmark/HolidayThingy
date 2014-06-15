angular.module('starter.controllers')

.controller('ChooseBudgetCtrl', 
	function($scope, $state) {
		$scope.minValue = 1;
		$scope.maxValue = 2;
		

}).directive('detectGestures', function($ionicGesture) {
  return {
    link : function(scope, elem, attrs) {
      $ionicGesture.on('swiperight',
            function(){
            	alert("swipeRight!"); 
            scope.currency = "Pounds"; 
        }, elem);
    },
    transclude:true
    

   }
});