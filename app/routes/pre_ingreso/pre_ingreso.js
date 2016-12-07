function pre_ingresoController(angular, app) {
    'use strict';

    'use angular template'; //jshint ignore:line

    app.controller('pre_ingresoCtrl', pre_ingresoCtrl);

    pre_ingresoCtrl.$inject = ['$timeout', '$mdSidenav','$state'];

    function pre_ingresoCtrl($timeout, $mdSidenav, $state){
        var self = this; //jshint ignore:line
        function send(){
            $state.go('cirugia.intervencion',{ user: self.user });
        }
        function myFunction() {
        var x = document.getElementById("pre_ingreso.user.circulante").value;
        document.getElementById("demo").innerHTML = x;
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
            self.myFunction = myFunction;
        }
        init();
            var variable = new Date(); 
var coso = (variable.getDate() + "/" + (variable.getMonth() +1) + "/" + variable.getFullYear());
document.getElementById("pruebafecha").innerHTML = coso;
    }
}
//document.getElementsByName("pre_ingreso.user.date")[0].value = coso;
//document.write("dia" + coso);
//document.getElementsByName("pre_ingreso.user.date")[0].innerHTML = coso;
module.exports = pre_ingresoController
