var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/alumnos", {
        templateUrl : "red.html",
        controller : "coreA"
    })
    .when("/asignaturas", {
        templateUrl : "index2.html",
        controller : "coreS"
    });
});