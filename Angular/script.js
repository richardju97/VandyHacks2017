// script.js

// Load Dependencies
var app = angular.module('mainApp', ['ngRoute']);

var totalcost = 0;
var nmeals = 0;

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
               $scope.items = [
                               {"id":1,"name":"name 1","description":"description 1","field3":"field3 1","field4":"field4 1","field5 ":"field5 1"},
                               {"id":2,"name":"name 2","description":"description 1","field3":"field3 2","field4":"field4 2","field5 ":"field5 2"},
                               {"id":3,"name":"name 3","description":"description 1","field3":"field3 3","field4":"field4 3","field5 ":"field5 3"},
                               {"id":4,"name":"name 4","description":"description 1","field3":"field3 4","field4":"field4 4","field5 ":"field5 4"},
                               {"id":5,"name":"name 5","description":"description 1","field3":"field3 5","field4":"field4 5","field5 ":"field5 5"},
                               {"id":6,"name":"name 6","description":"description 1","field3":"field3 6","field4":"field4 6","field5 ":"field5 6"},
                               {"id":7,"name":"name 7","description":"description 1","field3":"field3 7","field4":"field4 7","field5 ":"field5 7"},
                               {"id":8,"name":"name 8","description":"description 1","field3":"field3 8","field4":"field4 8","field5 ":"field5 8"},
                               {"id":9,"name":"name 9","description":"description 1","field3":"field3 9","field4":"field4 9","field5 ":"field5 9"},
                               {"id":10,"name":"name 10","description":"description 1","field3":"field3 10","field4":"field4 10","field5 ":"field5 10"},
                               {"id":11,"name":"name 11","description":"description 1","field3":"field3 11","field4":"field4 11","field5 ":"field5 11"},
                               {"id":12,"name":"name 12","description":"description 1","field3":"field3 12","field4":"field4 12","field5 ":"field5 12"},
                               {"id":13,"name":"name 13","description":"description 1","field3":"field3 13","field4":"field4 13","field5 ":"field5 13"},
                               {"id":14,"name":"name 14","description":"description 1","field3":"field3 14","field4":"field4 14","field5 ":"field5 14"},
                               {"id":15,"name":"name 15","description":"description 1","field3":"field3 15","field4":"field4 15","field5 ":"field5 15"},
                               {"id":16,"name":"name 16","description":"description 1","field3":"field3 16","field4":"field4 16","field5 ":"field5 16"},
                               {"id":17,"name":"name 17","description":"description 1","field3":"field3 17","field4":"field4 17","field5 ":"field5 17"},
                               {"id":18,"name":"name 18","description":"description 1","field3":"field3 18","field4":"field4 18","field5 ":"field5 18"}
                               ];
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
