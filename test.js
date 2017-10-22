// Need to get user input
// Item - Price - Purchaser

var request = require('superagent');
request.get('http://api.reimaginebanking.com/customers?key=96b959ee52f527d4c9a9260949508169').end(function(res){
    console.log(res.status);
    console.log(res.body); //do something
});

// members = [name]
var members = ["Richard", "Franklin", "Wilfred"];

// private balance = [balance]
var privBalance = [0, 0, 0];

// public balance = [balance]
var pubBalance = [0, 0, 0];

// a single member's inventory = [item, price]
var inventory = [
	["Strawberries", 5],
	["Coke", 3],
	["Rice", 15],
	["LSD", 40]
];
console.log(inventory[0][0]);
//console.log(inventory);