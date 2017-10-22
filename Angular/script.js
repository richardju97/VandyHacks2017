// script.js

// Load Dependencies
var app = angular.module('mainApp', ['ngRoute']);

var totalcost = 200;
var nmeals = 20;

app.controller('mainController', function($scope) {} );

app.controller('homeController', function($scope, $http) {
               
               $scope.name = "homeController";
               });

app.controller('dashController', function($scope, $http) {
               
               $scope.tcost = totalcost;
               $scope.acost = totalcost/nmeals;
               $scope.nummeals = nmeals;
               });

app.controller('addgrocController', function($scope, $http) {

               $scope.name = "addgrocController";
               });


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
           
           .when('/add-groceries', {

                 templateUrl: 'template/add-groceries.html',
                 controller: 'addgrocController'
                 })
           
           .when('/error404', {
                 
                 templateUrl: 'template/404.html',
                 controller: 'error404Controller'
                 })
           
           .otherwise({
                      
                      redirectTo: '/'
                      });
           
           $locationProvider.html5Mode(true);
});

