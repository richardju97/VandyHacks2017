// script.js

// Load Dependencies
var app = angular.module('mainApp', ['ngRoute']);

app.controller('mainController', function($scope) {} );

app.controller('homeController', function($scope, $http) {
               
               $scope.name = "homeController";
               });

app.controller('dashController', function($scope, $http) {
               
               
               });

//app.controller('contactController', function($scope, $http) {
//
//               $scope.name = "contactController";
//               });


app.config(function($routeProvider, $locationProvider) {
           
           $routeProvider
           
           .when('/', {
                 
                 templateUrl: 'template/home.html',
                 controller: 'homeController'
                 })
           
           .when('/dashboard', {
                 
                 templateUrl: 'template/dashboard.html',
                 controller: 'dashController'
                 })
           
           .when('/addmeal', {

                 templateUrl: 'template/addmeal.html',
                 controller: 'addmealController'
                 })
           
//           .when('/contact', {
//
//                 templateUrl: 'template/contact.html',
//                 controller: 'contactController'
//                 })
           
           .when('/error404', {
                 
                 templateUrl: 'template/404.html',
                 controller: 'error404Controller'
                 })
           
           .otherwise({
                      
                      redirectTo: '/'
                      });
           
           $locationProvider.html5Mode(true);
});

