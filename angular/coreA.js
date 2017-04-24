var API = "http://localhost:3001";

var MainApp= angular.module('myApp');

MainApp.controller('coreA', function($scope, $http) {
	$scope.newPersona = {};
	$scope.personas = {};
	$scope.selected = false;

	// Obtenemos todos los datos de la base de datos
	$http.get(API +'/api/alumnos')
        .then(function(response) {
		$scope.personas = response.data;
	}, function (error){
                console.log('Error al obtener los alumnos: ' + error.data);
        });

    $scope.buscarPersona= function(newPersona) {
            $http.post(API + '/api/buscar', $scope.newPersona)
            .then(function(response) {
                $scope.newPersona = {}; // Borramos los datos del formulario
                $scope.personas = response.data;
            }, function(error){
                console.log('Error: ' + error.data);
            });
        };
         $scope.buscarPersona2= function(newPersona) {
            $http.post(API + '/api/buscar2', $scope.newPersona)
            .then(function(response) {
                $scope.newPersona = {}; // Borramos los datos del formulario
                $scope.personas = response.data;
            }, function(error){
                console.log('Error: ' + error.data);
            });
        };

	// Función para registrar a una persona
        $scope.registrarPersona = function() {
            $http.post(API + '/api/alumno', $scope.newPersona)
            .then(function(response) {
                $scope.newPersona = {}; // Borramos los datos del formulario
                $scope.personas = response.data;
            }, function(error){
                console.log('Error: ' + error.data);
            });
        };

	// Función para editar los datos de una persona
        $scope.modificarPersona = function(newPersona) {
            $http.put(API + '/api/alumno/' + $scope.newPersona._id, $scope.newPersona)
            .then(function(response) {
                $scope.newPersona = {}; // Borramos los datos del formulario
                $scope.personas = response.data;
                $scope.selected = false;
            }, function(error){
                console.log('Error: ' + error.data);
            });
        };
        	// Función para editar los datos de una persona
        $scope.modificarPersona2 = function(newPersona) {
            $http.put(API + '/api/alumno/subject/' + $scope.newPersona._id, $scope.newPersona)
            .then(function(response) {
                $scope.newPersona = {}; // Borramos los datos del formulario
                $scope.personas = response.data;
                $scope.selected = false;
            }, function(error){
                console.log('Error: ' + error.data);
            });
        };
        

	// Función que borra un objeto persona conocido su id
        $scope.borrarPersona = function(newPersona) {
            $http.delete(API + '/api/alumno/' + $scope.newPersona._id)
            .then(function(response) {
                $scope.newPersona = {};
                $scope.personas = response.data;
                $scope.selected = false;
            },function(error){
                console.log('Error: ' + error.data);

            });
        };

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectPerson = function(persona) {
		$scope.newPersona = persona;
		$scope.selected = true;
		console.log($scope.newPersona, $scope.selected);
	};
});
