angular.module('xml.controllers',[])
.controller('xmlcontroller', function($scope, $exchangerate)){
	$scope.compra = $exchangerate.compra;
	$scope.venta = $exchangerate.venta;
});