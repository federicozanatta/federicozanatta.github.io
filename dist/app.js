(function() {
	'use strict';
	var app = angular.module('quirofano', ['ui.router','ngMaterial','ngSanitize'])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");
		$stateProvider
		.state('home', { url: "/", templateUrl: "./dist/routes/home/home.template.html", controller:"homeCtrl", controllerAs:"home" })
		.state('home.result', { url: "result", templateUrl: "./dist/routes/result/result.template.html",params: { user: null}, controller:"resultCtrl", controllerAs:"result" })
	});
	app.run(function (){});	
	require('./routes/home/home.js')(angular, app);
	require('./routes/result/result.js')(angular, app);
})();
