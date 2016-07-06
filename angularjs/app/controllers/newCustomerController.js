var app = angular.module('myApp', ['ngAnimate', 'ui.router']);
app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/',
		template: '<h1>Hello</h1>'
	});

	$stateProvider.state('about', {
		url: '/about',
		template: '<h1>About</h1>'
	});
})
app.controller('userController' ,function() {

	this.toggle = true;

	this.stars = [
		{name: "Rachell", age: 29, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'},
		{name: "Alex", age: 25, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'},
		{name: "Ayush", age: 16, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/_everaldo/128.jpg'}
	];

	this.form = function() {
		this.stars.push({name: this.name, age: this.age});
		this.name = "";
		this.age = "";
		console.log("CALLED");
	}

});