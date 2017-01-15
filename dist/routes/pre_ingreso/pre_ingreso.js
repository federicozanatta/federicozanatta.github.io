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
    var userInfo = $filter('filter')(response, {dni: dni1}, true)[0];
    $scope.user = userInfo ? userInfo : "";
    if($scope.user){
      $scope.dniNotFoundError = "";
      console.log($scope.user.nombre);
      var user2 = JSON.parse(sessionStorage.getItem('user'));
      user2.circulante.push($scope.user);
      sessionStorage['user'] = JSON.stringify(user2);
      console.log($scope.user.dni);
      var dniTest = $scope.user.dni;
      if (dni1 == dniTest) {
        $scope.itemsCirculante.push($scope.user.nombre);
        $scope.we1 = "";
      } else {    
        $scope.itemsCirculante.push($scope.we1);
        $scope.we1 = "";
      } 
    }else {
      $scope.dniNotFoundError = "No se encontro el dni";
    }
    console.log($scope.dniNotFoundError);
  })
  .error(function(e) {
    console.log("test de error");
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
  $scope.AddPaciente = function() {
     var pDNI = $scope.pacienteDNI;
  if ($scope.pacienteDNI.length == 0) {
   console.log($scope.pacienteDNI.length);
 } else {
  userService.getByDni(pDNI)
  .success(function(response) {
    var userInfo = $filter('filter')(response, {dni: pDNI}, true)[0];
    $scope.user = userInfo ? userInfo : "";
    if($scope.user){
      $scope.dniNotFoundError = "";
      console.log($scope.user.nombre);
      var dniTest = $scope.user.dni;
      if (pDNI == dniTest) {
        $scope.pacienteNombre = $scope.user.nombre;
        $scope.pacienteEdad = $scope.user.edad;
        $scope.pacienteDomicilio = $scope.user.domicilio;
        $scope.pacienteDiagnostico = $scope.user.diagnostico;
        $scope.pacienteHC = $scope.user.historia;
        $scope.pacienteFI = $scope.user.fechaIngreso;
        $scope.pacienteOS = $scope.user.obraSocial;
      } else {    
        console.log("no funco");
      } 
    }else {
      $scope.dniNotFoundError = "No se encontro el dni";
    }
    console.log($scope.dniNotFoundError);
  })
  .error(function(e) {
    console.log("test de error");
  });
}
  };
 //---------------------------------------------------------------------------
    $scope.AddDiagnostico = function(valor) {
      $scope.textoFinal = [];
      $scope.textoFinal.push(valor);
      $scope.textoFinal.push(" ");
      document.getElementById("test").blur();
  var recognizer = new webkitSpeechRecognition();
 // recognizer.continuous = true;
  recognizer.lang = "es";
  recognizer.onresult = function(event) {
    if (event.results.length > 0) {
      document.getElementById("test").focus();
         var result = event.results[event.results.length-1];
        if(result.isFinal) {
              $scope.variablePrueba = (result[0].transcript);
              $scope.textoFinal += (result[0].transcript);
              $scope.pacienteDiagnostico = $scope.textoFinal;
          } else {
              $scope.pacienteDiagnostico = (result[0].transcript);
          }
          document.getElementById("test").blur();
      }  else {
  document.getElementById("test").focus();
  }
  } ;
  recognizer.start();
  document.getElementById("test").focus();
}

 //---------------------------------------------------------------------------
        //$scope.datess = new Date();
        var date = new Date();
        $scope.datess = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();

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
   }

   init();
 }
}

module.exports = pre_ingresoController

