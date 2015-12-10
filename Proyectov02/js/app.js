

angular.module('navigation', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider

	.when('/', {
	    templateUrl: 'views/home.html'
	})
	.when('/about', {
	    templateUrl: 'views/about.html'
	})
	.when('/gallery', {
	    templateUrl: 'views/gallery.html'
	})
	.when('/blog', {
	    templateUrl: 'views/blog.html'
	})
	.when('/contact', {
	    templateUrl: 'views/contact.html'
	})
	.otherwise({
	  	redirectTo: '/'
	});
}]);