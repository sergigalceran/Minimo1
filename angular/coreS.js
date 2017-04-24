var API = "http://localhost:3001";

var MainApp= angular.module('myApp');

MainApp.controller('coreS', function($scope, $http) {
	$scope.newSubject = {};
	$scope.asignaturas = {};
	$scope.selected = false;

    $http.get(API +'/api/subjects')
        .then(function(response) {
		$scope.asignaturas = response.data;
	}, function (error){
                console.log('Error al obtener las asignaturas: ' + error.data);
        });
    
     $scope.registrarAsignatura = function() {
            $http.post(API + '/api/subject', $scope.newSubject)
            .then(function(response) {
                $scope.newSubject = {}; // Borramos los datos del formulario
                $scope.asignaturas = response.data;
            }, function(error){
                console.log('Error: ' + error.data);
            });
        };

        $scope.modificarAsignatura = function(newSubject) {
            $http.put(API + '/api/subject/' + $scope.newSubject._id, $scope.newSubject)
            .then(function(response) {
                $scope.newSubject = {}; // Borramos los datos del formulario
                $scope.asignaturas = response.data;
                $scope.selected = false;
            }, function(error){
                console.log('Error: ' + error.data);
            });
        };
        
        $scope.selectSubject = function(asignatura) {
		$scope.newSubject = asignatura;
		$scope.selected = true;
		console.log($scope.newSubject, $scope.selected);
	};

    $scope.borrarSubject = function(newSubject) {
    $http.delete('/api/subject/' + $scope.newSubject._id)
        .success(function(response) {
            $scope.cleanall();
            $scope.asignaturas = response.data;
            $scope.selected = false;
        })
        .error(function(data) {
            console.log('Error: ' + response);
        });
};

});