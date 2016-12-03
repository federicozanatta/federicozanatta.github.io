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