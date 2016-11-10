(function() {
	'use strict';
	var app = angular.module('quirofano', ['ui.router','ngMaterial','ngSanitize'])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");
		$stateProvider
		.state('land', { url: "/", templateUrl: "./dist/routes/land/land.template.html", controller:"landCtrl", controllerAs:"land" })
		//.state('home', { url: "/", templateUrl: "./dist/routes/home/home.template.html", controller:"homeCtrl", controllerAs:"home" })
		.state('home.result', { url: "result", templateUrl: "./dist/routes/result/result.template.html",params: { user: null}, controller:"resultCtrl", controllerAs:"result" })
	});
	app.run(function (){});	
	require('./routes/land/land.js')(angular, app);
	//require('./routes/home/home.js')(angular, app);
	require('./routes/result/result.js')(angular, app);
})();
