(function()
	{
		'use strict';

		angular.module('CounterApp',[])
		.controller('CounterControllers',MsgController);


		MsgController.$inject=['$scope'];

		function MsgController($scope)
		{
			$scope.onceCounter=0;
			$scope.counter=0;
			$scope.name="Jude";
			
			$scope.showNumberOfWatchers=function()
			{
				console.log('Watcher count '+$scope.$$watchersCount);
			};

			$scope.countOnce=function()
			{
				$scope.onceCounter=1;
			};
			$scope.upCounter=function()
			{
				$scope.counter++;
			};

			$scope.$watch(function()
				{
					console.log("this is a test");
				});

			// $scope.$watch('onceCounter',function(newValue,oldValue)
			// 	{
			// 		console.log("onceCount old value ", oldValue);
			// 		console.log("onceCount new value ",newValue);
			// 	});


			// $scope.$watch('counter',function(newValue,oldValue)
			// 	{
			// 		console.log("counter old value ", oldValue);
			// 		console.log("counter new value ",newValue);
			// 	});
			
		}


			

	})();