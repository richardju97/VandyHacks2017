// server.js

var express = require("express");
var app = require("http")
var app = express();
var path = require('path');
var router = express.Router();
var http = require('http')


router.use(function(req, res, next) {
	console.log("/" + req.method);
	next();
});


app.use('/', express.static(path.join(__dirname, '/Angular/')));

app.use('/dashboard', express.static(path.join(__dirname, '/Angular/')));

app.use('/home', express.static(path.join(__dirname, '/Angular/')));

//app.use("/home", function(req, res){
//        res.sendFile(path + "home.html");
//});
//
//app.use("/dashboard", function(req, res){
//        res.sendFile(path + "dashboard.html");
//});

//app.use("*", function(req, res){
//    res.sendFile(path + "404.html");
//});

app.listen(process.env.PORT || 3000, function() {
	console.log("Live at Port 3000");
});
