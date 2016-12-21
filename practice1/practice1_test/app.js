(function()
	{
		'use strict';

		angular.module('App',[])
		.controller('Controller',Controller);

		Controller.$inject=['$scope'];

		function Controller($scope)
		{
			$scope.name="";
			$scope.message="";
			$scope.count=0;
			$scope.checkObjects=function()
			{
				$scope.count=0;
				var input=document.getElementById("lunch-menu");
				var objects=input.value;
				
				objects=objects.split(',',4);

				for(var i=0;i<4;i++)
				{
					if(objects[i]!="" &&objects[i]!=null)
					{
						$scope.count++;
					}

				}
				// $scope.message=""+count;
				// if(objects=="")
				// 	$scope.message="Please enter data first";
				// else if(objects.length<=3)
				// 	$scope.message= "Enjoy!";
				// else
				// 	$scope.message= "Too much!";
				if($scope.count<=0)
				
					$scope.message="Please enter data first";
				else if($scope.count<=3)
					$scope.message= "Enjoy!";
				else
					$scope.message= "Too much!";

				

				if($scope.count!="")
					$scope.cc="green";
				else
					$scope.cc="red";
			};
			
			
			

		}

	})();