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