var app = angular.module('myApp', []);

app.controller('userController' ,function() {

	this.toggle = false;

	this.stars = [
		{name: "Rachell", age: 29},
		{name: "Alex", age: 25},
		{name: "Ayush", age: 16}
	];

	this.form = function() {
		this.stars.push({name: this.name, age: this.age});
		this.name = "";
		this.age = "";
		console.log("CALLED");
	}

});