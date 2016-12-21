(function()
	{
		'use strict';

		angular.module('MsgApp',[])
		.controller('MsgControllers',MsgController)
		.filter('loves',LoveFilter)
		.filter('truth',TruthFilter);

		MsgController.$inject=['$scope','lovesFilter'];

		function MsgController($scope,lovesFilter)
		{
			$scope.name="Jude";
			$scope.stateOfBeing="hungry";

			$scope.sayMessage=function()
			{
				return "Jude likes to eat healthy apple at night!But need to brush teeth for protection!"
			};


			$scope.sayLovesMessage=function()
			{
				var msg="Jude likes to eat healthy apple at night!";
				msg=lovesFilter(msg);
				return msg;
			};

			$scope.feedJude=function()
			{
				$scope.stateOfBeing="fed";
				
			};


			
		}


			function LoveFilter()
			{
				return function (input)
				{
					input=input || "";
					input=input.replace("likes","loves");
					return input;	
				};
			}

			function TruthFilter()
			{
				return function (input,target,replace)
				{
					input=input || "";
					input=input.replace(target,replace);
					return input;	
				};
			}

	})();