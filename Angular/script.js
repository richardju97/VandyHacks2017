// script.js

// Load Dependencies
var app = angular.module('mainApp', ['ngRoute']);

var totalcost = 0;
var nmeals = 0;

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
               $scope.addGroceryItem = function() {
               
//                   console.log("button clicked");
                   console.log("Item: " + $scope.itemname);
                   console.log("Type: " + $scope.itemtype);
                   console.log("Amount: " + $scope.itemamount);
                   console.log("Cost: " + $scope.itemcost);
               };
           });

app.controller('addmealController', function($scope, $http) {
               
               $scope.name = "addmealController";
               $scope.addMeal = function() {
               
                   console.log("Meal Name: " + $scope.mealname);
                   console.log("Meal Cost: " + $scope.mealcost);
                   console.log("Meal Date: " + $scope.mealdate);
               
                   nmeals++;
                   totalcost += $scope.mealcost;
               }
               
               $scope.addAnother = function() {
               
                   $scope.addMeal();
                   var frm = document.getElementsByName('meal-form')[0];
                   frm.reset();
                   
               }
               
//               $scope.addThenReturn = function() {
//
//                   $scope.addMeal();
//               }
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
