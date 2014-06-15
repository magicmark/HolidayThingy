angular.module('starter.controllers')

.controller('ChooseBudgetCtrl', 
	function($scope, $state, $http,Holiday) {
		$scope.minValue = 1;
		$scope.maxValue = 2;
		$scope.currency = "bitcoins";

		var gbpToBtc = null;

		$http.get('https://blockchain.info/tobtc?value=1&currency=GBP')
		  .success(function(data)
		  	{
		  		gbpToBtc = data;
		  	});

		/*
		 * This is bullshit!
		 */

		 $scope.priceSlider = {
			    ceil: 7,
			    floor: 1
			};

		$scope.chooseDate = function()
		{
			$state.go('chooseDates');
		}

		$scope.$watch('currency',
			function(oldValues,newValues){
				if(gbpToBtc === null || gbpToBtc === 'undefined')
					return;

				$scope.$broadcast('reCalcViewDimensions');

				if(newValues == 'pounds' 
					&& oldValues == 'bitcoins')
				{
					$scope.minValue *= gbpToBtc;
					$scope.maxValue *= gbpToBtc;
	
					$scope.priceSlider.floor *= gbpToBtc;
					$scope.priceSlider.ceil *= gbpToBtc;

				}
				else if(newValues == 'bitcoins' 
					&& oldValues == 'pounds')
				{
					$scope.maxValue /= gbpToBtc;
					$scope.minValue /= gbpToBtc;

					$scope.priceSlider.floor /= gbpToBtc;
					$scope.priceSlider.ceil  /= gbpToBtc;

				}
				Holiday.setRange($scope.minValue,
					$scope.maxValue,newValues);

		});

}).directive('detectGesturesBudget', function($ionicGesture) {
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

    }

   }
});
