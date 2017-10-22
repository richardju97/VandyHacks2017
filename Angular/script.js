// script.js

// Load Dependencies
var app = angular.module('mainApp', ['ngRoute']);

var totalcost = 49.32;
var nmeals = 7;

var allMeals = [
       {"id":1,"name":"Panda Express","date":"Fri Oct 20 2017 00:00:00 GMT-0500 (CDT)","cost":7.81},
       {"id":2,"name":"Noodles & I","date":"date 1","cost":9.62},
       {"id":3,"name":"Chipotle","date":"date 1","cost":8.03},
       {"id":4,"name":"AJ's","date":"date 1","cost":3.20},
       {"id":5,"name":"Jimmy John's","date":"date 1","cost":5.14},
       {"id":6,"name":"McDonald's","date":"date 1","cost":7.49},
       {"id":7,"name":"Chipotle","date":"date 1","cost":8.03}
     ];

app.controller('mainController', function($scope) {} );

app.controller('homeController', function($scope, $http) {
               
               $scope.name = "homeController";
               });

app.controller('dashController', function($scope, $filter) {
               
               $scope.tcost = totalcost;
               $scope.acost = totalcost/nmeals;
               $scope.nummeals = nmeals;

               $scope.sort = {
               
                   sortingOrder : 'id',
                   reverse : false
               }
               
               $scope.gap = 5;
               
               $scope.filteredItems = [];
               $scope.groupedItems = [];
               $scope.itemsPerPage = 5;
               $scope.pagedItems = [];
               $scope.currentPage = 0;
               $scope.items = allMeals;
               var searchMatch = function (haystack, needle) {
               if (!needle) {
                   return true;
               }
                   return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
               };
               
               // init the filtered items
               $scope.search = function () {
               $scope.filteredItems = $filter('filter')($scope.items, function (item) {
                    for(var attr in item) {
                        if (searchMatch(item[attr], $scope.query))
                            return true;
                    }
                    return false;
                });
               
               if ($scope.sort.sortingOrder !== '') {
                   $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
               }
               $scope.currentPage = 0;
               // now group by pages
               $scope.groupToPages();
               
               };
               
               
               // calculate page in place
               $scope.groupToPages = function () {
               $scope.pagedItems = [];
               
               for (var i = 0; i < $scope.filteredItems.length; i++) {
               if (i % $scope.itemsPerPage === 0) {
               $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
               } else {
               $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
               }
               }
               };
               
               $scope.range = function (size,start, end) {
               var ret = [];
               console.log(size,start, end);
               
               if (size < end) {
               end = size;
               start = size-$scope.gap;
               }
               for (var i = start; i < end; i++) {
               ret.push(i);
               }
               console.log(ret);
               return ret;
               };
               
               $scope.prevPage = function () {
               if ($scope.currentPage > 0) {
               $scope.currentPage--;
               }
               };
               
               $scope.nextPage = function () {
               if ($scope.currentPage < $scope.pagedItems.length - 1) {
               $scope.currentPage++;
               }
               };
               
               $scope.setPage = function () {
               $scope.currentPage = this.n;
               };
               
               // functions have been describe process the data for display
               $scope.search();

//               $scope.generateTable = function() {
//
//                   var body = document.getElementsByName('body')[0];
//
//                   var tbl = document.createElement("table");
//                   var tblbody = document.createElement("tbody");
//
//                   for (var i = 0; i < nmeals; i++) {
//
//                       var row = document.createElement("tr");
//
//                       for (var j = 0; j < 3; j++) {
//                           var cell = document.createElement("td");
//                           var celltxt = document.createTextNode("test");
//                           cell.appendChild(celltxt);
//                           row.appendChild(cell);
//                       }
//
//                       tblbody.appendChild(row);
//                   }
//
//                   tbl.appendChild(tblbody);
//                   body.appendChild(tbl);
//               }
//
//               $scope.generateTable();
       });

app.$inject = ['$scope', '$filter'];

app.directive("customSort", function() {
                     return {
                     restrict: 'A',
                     transclude: true,
                     scope: {
                     order: '=',
                     sort: '='
                     },
                     template :
                     ' <a ng-click="sort_by(order)" style="color: #555555;">'+
                     '    <span ng-transclude></span>'+
                     '    <i ng-class="selectedCls(order)"></i>'+
                     '</a>',
                     link: function(scope) {
                     
                     // change sorting order
                     scope.sort_by = function(newSortingOrder) {
                     var sort = scope.sort;
                     
                     if (sort.sortingOrder == newSortingOrder){
                     sort.reverse = !sort.reverse;
                     }
                     
                     sort.sortingOrder = newSortingOrder;
                     };
                     
                     
                     scope.selectedCls = function(column) {
                     if(column == scope.sort.sortingOrder){
                     return ('icon-chevron-' + ((scope.sort.reverse) ? 'down' : 'up'));
                     }
                     else{
                     return'icon-sort'
                     }
                     };
                     }// end link
                     }
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
               
                   allMeals.push({
                                 "id":20,
                                 "name":$scope.mealname,
                                 "date":$scope.mealdate,
                                 "cost":$scope.mealcost
                   });
               
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
