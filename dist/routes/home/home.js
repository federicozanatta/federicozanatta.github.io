function homeController(angular, app) {
    'use strict';

    'use angular template'; //jshint ignore:line

    app.controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$timeout', '$mdSidenav'];

    function homeCtrl($timeout, $mdSidenav){
        var self = this; //jshint ignore:line
        function send(){
            alert("nombre: " + self.user.name + " Apellido: " + self.user.lastname);
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
            self.user = {
                name: '',
                lastname:''
            };
            self.toggleLeft = toggleLeft;
            self.toggleRight = toggleRight;
            self.send = send;
        }
        init();
    }
};
module.exports = homeController;