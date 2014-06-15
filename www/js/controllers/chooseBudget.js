angular.module('starter.controllers')

.controller('ChooseBudgetCtrl', 
	function($scope, $state) {
		$scope.minValue = 1;
		$scope.maxValue = 2;
		$scope.currency = "bitcoins";

		var exchangeRate = 360;

		/*
		 * This is bullshit!
		 */
		 
		$scope.$watch('currency',
			function(oldValues,newValues){
				if(newValues == 'pounds' 
					&& oldValues == 'bitcoins')
				{
					$scope.minValue /= exchangeRate;
				}
				else if(newValues == 'bitcoins' 
					&& oldValues == 'pounds')
				{
					$scope.minValue *= exchangeRate;
				}
		});

}).directive('detectGestures', function($ionicGesture) {
  return {
    link : function(scope, elem, attrs) {
      $ionicGesture.on('swiperight',
            function(){
	            scope.currency = "pounds";
	            scope.$apply();
        }, elem);
      
      $ionicGesture.on('swipeleft',
            function(){
	            scope.currency = "bitcoins";
	            scope.$apply();
        }, elem);

    },
    template: '{{ currency }}'

   }
});