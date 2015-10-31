angular.module('bootstrap', ['ngRoute', 'bootstrap.controllers']).config(['$routeProvider' , function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl:'views/home.html',
		controller:"homeController"
		
	}).when('/products', {
		templateUrl:'views/products.html',
		controller:"productsController"

		
	})
		.otherwise({
		redirectTo:'/'
		});
}]);