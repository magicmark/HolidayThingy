angular.module('starter.controllers')

.controller('ChooseBudgetCtrl', 
	function($scope, $state, $http,Holiday, PN) {
		$scope.minValue = 1;
		$scope.maxValue = 2;
		$scope.currency = "bitcoins";

		var gbpToBtc = null;

    PN.sub(function (m) {
      if (m.page == 'chooseBudget') {
        if (m.action == 'moveMin')    setMin(m.val);
        if (m.action == 'moveMax')    setMax(m.val);
        if (m.action == 'changeCurr') setCurr(m.val);
        if (m.action == 'goToDates') {
          goToDates();
        }
      }
    });






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

    var setMin = function (v) {
      $scope.minValue = v;
    };
    var setMax = function (v) {
      // if ($scope.maxValue == v) return;
      console.log("recieveing max " + v)
      $scope.maxValue = v;
    };
    var setCurr = function (c) {
      $scope.currency = c;
    };


    $scope.$watch('minValue',
      function(oldValues,newValues){
        if (oldValues == newValues) return;
        PN.pub('chooseBudget', 'moveMin', $scope.minValue);     
      }
    );
    $scope.$watch('maxValue',
      function(){
        PN.pub('chooseBudget', 'moveMax', $scope.maxValue);     
      }
    );

    $scope.btnChooseDate = function () {
      PN.pub('chooseBudget', 'goToDates', '');     
      goToDates();
    };

		var goToDates = function()
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
