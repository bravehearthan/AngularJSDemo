(function()
	{
		'use strict';


		angular.module('myFirstApp',[])
		.controller('MyFirstController',function($scope)
			{
				$scope.name="brave"
				$scope.sayHello=function()
				{
					return "Hello World!"
				};
			});

	})();