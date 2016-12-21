(function()
	{
		'use strict';

		angular.module('MsgApp',[])
		.controller('MsgController',MsgController);

		MsgController.$inject=['$scope'];

		function MsgController($scope)
		{
			$scope.name="Jude";
			$scope.stateOfBeing="hungry";
			$scope.sayMessage=function()
			{
				return "Jude likes to eat healthy apple at night!But need to brush teeth for protection!"
			};
			$scope.feedJude=function()
			{
				$scope.stateOfBeing="fed";
				
			};
			
		}

	})();