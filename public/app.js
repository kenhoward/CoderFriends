var app = angular.module('coderFriends', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'index.html'
	})
	.when('/home', {
		templateUrl: 'templates/home.html'
	})
	.when ('/friend/:github_username', {
		templateUrl: 'templates/friend.html'
		controller: 'githubCtrl'
	})
	.otherwise {
		redirectTo: ('/')
	}


})