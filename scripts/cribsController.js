angular
	.module('ngCribs')
	.controller('cribsController', function($scope, cribsFactory) {
		$scope.cribs;

		$scope.newInfo= {};

		$scope.addCrib = function(newInfo){
			$scope.cribs.push(newInfo);
		}

		cribsFactory.getCribs().then(function(data){
			$scope.cribs=data.data;
		},function(error){
			console.log(error)
		});
		
	});