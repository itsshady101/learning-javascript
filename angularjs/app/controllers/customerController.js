var app = angular.module('myApp', []);

app.controller('CustomerController' ,function($scope) {
	$scope.sortBy = 'name';
	$scope.reverse = false;

	$scope.customers = [
		{name: "alex", city: "new york", joined: '2000-12-02', orderTotal: 9.92999}, 
		{name: "mia", city: "lebanon", joined: '2002-09-02', orderTotal: 19.92999}, 
		{name: "lisa", city: "las vegas", joined: '2006-03-26', orderTotal: 2.3319}, 
		{name: "katrinah", city: "texas", joined: '2009-11-16', orderTotal: 6.9696}
	];

	$scope.doSort = function(propName) {
		$scope.sortBy = propName; 
		$scope.reverse = !$scope.reverse;
	};

	$scope.formSubmit = function() {
		$scope.customers.push({name:$scope.name, city:$scope.city, joined:$scope.joined, orderTotal:$scope.total});
		$scope.name = '';
		$scope.city = '';
		$scope.joined = '';
		$scope.total = '';
	};
});