angular.module('bootstrap.controllers',[]).controller('homeController',['$scope', function($scope) {
	$scope.title = 'Hello World';
	$scope.promotions = [
		{name: 'Budweiser', price: '€3'},
		{name: 'Coors Light', price: '€3'},
		{name: 'Miller', price: '€3'},
	];
	$scope.add = function() {
		var newpromotion = angular.copy($scope.newpromotion);
		$scope.promotions.push(newpromotion);
	};
}])

.controller('productController',[function() {
	
}])