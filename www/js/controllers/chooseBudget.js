angular.module('starter.controllers')

.controller('ChooseBudgetCtrl', 
	function($scope, $state) {
		$scope.minValue = 1;
		$scope.maxValue = 2;
		$scope.currency = "bitcoins";

		xmlHTTP = new XMLHttpRequest();
		xmlHTTP.open("GET", "http://blockchain.info/tobtc?value=1&currency=GBP", false);
		xmlHTTP.send(null);
		var gbpToBtc = xmlHTTP.responseText;
		alert(gbpToBtc);

		/*
		 * This is bullshit!
		 */
		 
		$scope.$watch('currency',
			function(oldValues,newValues){
				if(newValues == 'pounds' 
					&& oldValues == 'bitcoins')
				{
					$scope.minValue *= gbpToBtc;
				}
				else if(newValues == 'bitcoins' 
					&& oldValues == 'pounds')
				{
					$scope.minValue /= gbpToBtc;
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
