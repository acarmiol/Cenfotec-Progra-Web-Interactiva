var myGrocery = angular.module('myGrocery', ['firebase']);

myGrocery.controller('GroceryListController', 
function GroceryListController($scope, $firebaseArray){

	var fireRef = new Firebase('https://comprassuper.firebaseio.com/');

	$scope.items = $firebaseArray(fireRef);
	$scope.newItem = {name:'', quantity:0};

	//Add Item
	$scope.addItem = function() {
		$scope.items.$add($scope.newItem);
		$scope.newItem = {name:'', quantity:0};
		// for Local Storage
		// Just Serialize object and save in LocalStorage
	};


	//Remove Item
	$scope.removeItem = function(toRemove) {
		$scope.items.$remove(toRemove);
	};


	//Update Item
	$scope.updateItem = function(toUpdate, newName, newQuantity) {
		toUpdate.name = newName;
		toUpdate.quantity = newQuantity;
		$scope.items.$save(toUpdate);
	};


});