function pre_ingresoController(angular, app) {
    'use strict';

    'use angular template'; //jshint ignore:line

    app.controller('pre_ingresoCtrl', pre_ingresoCtrl);

    pre_ingresoCtrl.$inject = ['$timeout', '$mdSidenav','$state', '$scope','$http', 'userService','$filter', '$parse'];

    function pre_ingresoCtrl($timeout, $mdSidenav, $state, $scope, $http, userService, $filter, $parse){

//---------------------------------------------------------------------------
  $scope.itemsCirculante = [];
  $scope.AddItemCirculante = function() {
  var dni1 = $scope.we1;
  if ($scope.we1.length == 0) {
     console.log($scope.we1.length);
  } else {
    userService.getByDni(dni1)
    .success(function(response) {
      $scope.user = $filter('filter')(response, {dni: dni1})[0];
       console.log($scope.user.nombre + " " + $scope.user.apellido);
        var user2 = JSON.parse(sessionStorage.getItem('user'));
        user2.circulante.push($scope.user);
        sessionStorage['user'] = JSON.stringify(user2);
        console.log($scope.user.dni);
        if (dni1 == $scope.user.dni) {
          $scope.itemsCirculante.push($scope.user.nombre + " " + $scope.user.apellido);
          $scope.we1 = "";
        } else {    
        $scope.itemsCirculante.push($scope.we1);
        $scope.we1 = "";
  }
    })
    .error(function(error) {
      $scope.itemsCirculante.push($scope.we1);
        $scope.we1 = "";
    });
    }
  };
  $scope.RemoveItemCirculante = function(item) {
    $scope.itemsCirculante.splice($scope.itemsCirculante.indexOf(item), 1);
  };

  //---------------------------------------------------------------------------
  $scope.itemsInstrumentista = [];
  $scope.AddItemInstrumentista = function() {

    $scope.itemsInstrumentista.push($scope.we2);
    $scope.we2 = "";
  };
  $scope.RemoveItemInstrumentista = function(item) {
    $scope.itemsInstrumentista.splice($scope.itemsInstrumentista.indexOf(item), 1);
  };

  //---------------------------------------------------------------------------


        //$scope.datess = new Date();
        var date = new Date();
        $scope.datess = ('0' + date.getDate()).slice(-2) + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getFullYear();

        var self = this; //jshint ignore:line
        function send(a){
          if (a) {
            console.log("algo: "+a);
$state.go('cirugia.intervencion',{ user: self.user });
          } else {
        $scope.showMe1 = false; 
        $scope.showMe1 = !$scope.showMe1;
          }         
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

