function pre_ingresoController(angular, app) {
    'use strict';

    'use angular template'; //jshint ignore:line

    app.controller('pre_ingresoCtrl', pre_ingresoCtrl);

    pre_ingresoCtrl.$inject = ['$timeout', '$mdSidenav','$state'];

    function pre_ingresoCtrl($timeout, $mdSidenav,$state){
        var self = this; //jshint ignore:line
        function send(){
            $state.go('pre_ingreso.result',{ user: self.user });
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
module.exports = pre_ingresoController;