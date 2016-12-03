(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
	'use strict';
	var app = angular.module('quirofano', ['ui.router','ngMaterial','ngSanitize'])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");
		$stateProvider
		//.state('land', { url: "/", templateUrl: "./dist/routes/land/land.template.html", controller:"landCtrl", controllerAs:"land" })
		//.state('home', { url: "/", templateUrl: "./dist/routes/home/home.template.html", controller:"homeCtrl", controllerAs:"home" })
		//.state('home.result', { url: "result", templateUrl: "./dist/routes/result/result.template.html",params: { user: null}, controller:"resultCtrl", controllerAs:"result" })
		.state('cirugia', { url: "/", templateUrl: "./dist/routes/cirugia/cirugia.template.html", controller:"cirugiaCtrl", controllerAs:"cirugia" })
		.state('cirugia.pre_ingreso', { url: "pre_ingreso", templateUrl: "./dist/routes/pre_ingreso/pre_ingreso.template.html",params: { user: null}, controller:"pre_ingresoCtrl", controllerAs:"pre_ingreso" })
		.state('cirugia.intervencion', { url: "intervencion", templateUrl: "./dist/routes/intervencion/intervencion.template.html",params: { user: null}, controller:"intervencionCtrl", controllerAs:"intervencion" })
		.state('cirugia.conteo', { url: "conteo", templateUrl: "./dist/routes/conteo/conteo.template.html",params: { user: null}, controller:"conteoCtrl", controllerAs:"conteo" })
		.state('cirugia.revision', { url: "revision", templateUrl: "./dist/routes/revision/revision.template.html",params: { user: null}, controller:"revisionCtrl", controllerAs:"revision" })
	

	});
	app.run(function (){});	
	//require('./routes/land/land.js')(angular, app);
	require('./routes/cirugia/cirugia.js')(angular, app);
	require('./routes/pre_ingreso/pre_ingreso.js')(angular, app);
	require('./routes/intervencion/intervencion.js')(angular, app);
	require('./routes/conteo/conteo.js')(angular, app);
	require('./routes/revision/revision.js')(angular, app);
})();

},{"./routes/cirugia/cirugia.js":2,"./routes/conteo/conteo.js":3,"./routes/intervencion/intervencion.js":4,"./routes/pre_ingreso/pre_ingreso.js":5,"./routes/revision/revision.js":6}],2:[function(require,module,exports){
function cirugiaController(angular, app) {
    'use strict';

    'use angular template'; //jshint ignore:line

    app.controller('cirugiaCtrl', cirugiaCtrl);

    cirugiaCtrl.$inject = ['$timeout', '$mdSidenav','$state'];

    function cirugiaCtrl($timeout, $mdSidenav,$state){
        var self = this; //jshint ignore:line
        function send(){
            $state.go('cirugia.pre_ingreso',{ user: self.user});
        }
        function buildToggler(componentId) {
            $mdSidenav(componentId).toggle();
        }
        function toggleLeft(){ 
            buildToggler('left'); 
        }
        function toggleRight() { 
            buildToggler('right');
        }


        function init(){
            self.user = {};
            self.toggleLeft = toggleLeft;
            self.toggleRight = toggleRight;
            self.send = send;
        }
        init();
    }
}
module.exports = cirugiaController;
},{}],3:[function(require,module,exports){
function conteoController(angular, app) {
    'use strict';

    'use angular template'; //jshint ignore:line

    app.controller('conteoCtrl', conteoCtrl);

    conteoCtrl.$inject = ['$timeout', '$mdSidenav','$state'];

    function conteoCtrl($timeout, $mdSidenav,$state){
        var self = this; //jshint ignore:line
        function send(){
            $state.go('cirugia.revision',{ user: self.user });
        }
        function volverIntervencion(){
            $state.go('cirugia.intervencion',{ user: self.user });
        }

        function buildToggler(componentId) {
            $mdSidenav(componentId).toggle();
        }
        function toggleLeft(){ 
            buildToggler('left'); 
        }
        function toggleRight() { 
            buildToggler('right');
        }


        function init(){
            self.user = {};
            self.toggleLeft = toggleLeft;
            self.toggleRight = toggleRight;
            self.send = send;
            self.volverIntervencion = volverIntervencion;
        }
        init();
    }
}
module.exports = conteoController;
},{}],4:[function(require,module,exports){
function intervencionController(angular, app) {
    'use strict';

    'use angular template'; //jshint ignore:line

    app.controller('intervencionCtrl', intervencionCtrl);

    intervencionCtrl.$inject = ['$timeout', '$mdSidenav','$state'];

    function intervencionCtrl($timeout, $mdSidenav,$state){
        var self = this; //jshint ignore:line
        function send(){
            $state.go('cirugia.conteo',{ user: self.user });
        }
        function volverPreingreso(){
            $state.go('cirugia.pre_ingreso',{ user: self.user });
        }

        function buildToggler(componentId) {
            $mdSidenav(componentId).toggle();
        }
        function toggleLeft(){ 
            buildToggler('left'); 
        }
        function toggleRight() { 
            buildToggler('right');
        }


        function init(){
            self.user = {};
            self.toggleLeft = toggleLeft;
            self.toggleRight = toggleRight;
            self.send = send;
            self.volverPreingreso = volverPreingreso;
        }
        init();
    }
}
module.exports = intervencionController;
},{}],5:[function(require,module,exports){
function pre_ingresoController(angular, app) {
    'use strict';

    'use angular template'; //jshint ignore:line

    app.controller('pre_ingresoCtrl', pre_ingresoCtrl);

    pre_ingresoCtrl.$inject = ['$timeout', '$mdSidenav','$state'];

    function pre_ingresoCtrl($timeout, $mdSidenav,$state){
        var self = this; //jshint ignore:line
        function send(){
            $state.go('cirugia.intervencion',{ user: self.user });
        }
        function volverCirugia(){
            $state.go('cirugia',{ user: self.user });
        }
        function buildToggler(componentId) {
            $mdSidenav(componentId).toggle();
        }
        function toggleLeft(){ 
            buildToggler('left'); 
        }
        function toggleRight() { 
            buildToggler('right');
        }
        function init(){
            self.user = {};
            self.toggleLeft = toggleLeft;
            self.toggleRight = toggleRight;
            self.send = send;
            self.volverCirugia = volverCirugia;
        }
        init();
    }
}
//var variable = new Date(); 
//var coso = (variable.getDate() + "/" + (variable.getMonth() +1) + "/" + variable.getFullYear());
//document.write("dia" + coso);
module.exports = pre_ingresoController

},{}],6:[function(require,module,exports){
function revisionController(angular, app) {
    'use strict';

    'use angular template'; //jshint ignore:line

    app.controller('revisionCtrl', revisionCtrl);

    revisionCtrl.$inject = ['$timeout', '$mdSidenav','$state'];

    function revisionCtrl($timeout, $mdSidenav,$state){
        var self = this; //jshint ignore:line
        function send(){
           console.log("Final del informe");
        }
     function volverConteo(){
            $state.go('cirugia.conteo',{ user: self.user });
        }
        function buildToggler(componentId) {
            $mdSidenav(componentId).toggle();
        }
        function toggleLeft(){ 
            buildToggler('left'); 
        }
        function toggleRight() { 
            buildToggler('right');
        }


        function init(){
            self.user = {};
            self.toggleLeft = toggleLeft;
            self.toggleRight = toggleRight;
            self.send = send;
            self.volverConteo = volverConteo;
        }
        init();
    }
}
module.exports = revisionController;
},{}]},{},[1]);
