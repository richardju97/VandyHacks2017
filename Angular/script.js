// script.js

// Load Dependencies
var app = angular.module('mainApp', ['ngRoute']);

app.controller('mainController', function($scope) {} );

app.controller('homeController', function($scope, $http) {
               
               $scope.name = "homeController";
               });

app.controller('aboutController', function($scope, $http) {
               
               
               });

app.controller('contactController', function($scope, $http) {
               
               $scope.name = "contactController";
               });


app.config(function($routeProvider, $locationProvider) {
           
    $routeProvider
	.when('/404', {
		templateUrl: template/404.html,
		controller: '404controller'
	})        
           
    $locationProvider.html5Mode(true);
});
