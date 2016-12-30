function pre_ingresoController(angular, app) {
    'use strict';

    'use angular template'; //jshint ignore:line

    app.controller('pre_ingresoCtrl', pre_ingresoCtrl);

    pre_ingresoCtrl.$inject = ['$timeout', '$mdSidenav','$state', '$scope'];

    function pre_ingresoCtrl($timeout, $mdSidenav, $state, $scope){
        
//---------------------------------------------------------------------------
  $scope.itemsCirculante = [];
  $scope.AddItemCirculante = function(item) {
    $scope.itemsCirculante.push($scope.we1);
    $scope.we1 = "";
  };
  $scope.RemoveItemCirculante = function(item) {
    $scope.itemsCirculante.splice($scope.itemsCirculante.indexOf(item), 1);
  };

  //---------------------------------------------------------------------------
  $scope.itemsInstrumentista = [];
  $scope.AddItemInstrumentista = function(item) {
    $scope.itemsInstrumentista.push($scope.we2);
    $scope.we2 = "";
  };
  $scope.RemoveItemInstrumentista = function(item) {
    $scope.itemsInstrumentista.splice($scope.itemsInstrumentista.indexOf(item), 1);
  };

        //$scope.datess = new Date();
        var date = new Date();
        $scope.datess = ('0' + date.getDate()).slice(-2) + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getFullYear();

        var self = this; //jshint ignore:line
        function send(){
            $state.go('cirugia.intervencion',{ user: self.user });
        }
 //       function myFunction() {           
  //      var x = document.getElementById("pre_ingreso.user.circulante").value;
  //      document.getElementById("demo").innerHTML = x;
  //      }

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
     //       self.myFunction = myFunction;
        }

        init();
    }
}

module.exports = pre_ingresoController

