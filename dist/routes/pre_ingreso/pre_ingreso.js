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
