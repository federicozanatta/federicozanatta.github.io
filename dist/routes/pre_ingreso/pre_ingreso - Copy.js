function pre_ingresoController(angular, app) {
    'use strict';

    'use angular template'; //jshint ignore:line

    app.controller('pre_ingresoCtrl', pre_ingresoCtrl);

    pre_ingresoCtrl.$inject = ['$timeout', '$mdSidenav','$state', '$scope'];

    function pre_ingresoCtrl($timeout, $mdSidenav, $state, $scope){
        //$scope.datess = new Date();
        var date = new Date();
        $scope.datess = ('0' + date.getDate()).slice(-2) + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getFullYear();
        var self = this; //jshint ignore:line
        function send(){
            $state.go('cirugia.intervencion',{ user: self.user });
        }
        function myFunction(item) {
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
            angular.module('ui.bootstrap.demo').controller('TimepickerDemoCtrl', function ($scope, $log) {
  $scope.mytime = new Date();

  $scope.hstep = 1;
  $scope.mstep = 15;

  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  $scope.update = function() {
    var d = new Date();
    d.setHours( 14 );
    d.setMinutes( 0 );
    $scope.mytime = d;
  };

  $scope.changed = function () {
    $log.log('Time changed to: ' + $scope.mytime);
  };

  $scope.clear = function() {
    $scope.mytime = null;
  };
});


        init();
    }
}

module.exports = pre_ingresoController

