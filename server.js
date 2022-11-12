//===========================================================================//
//
// APP_NAME
// by Nicholas Smith and Sam Effendy 2020
//
// OPEN SOURCE VERSION
// As part of the 2020 Steel City Hacks Hackathon
//
//===========================================================================//

//Define the server port:
var port = 27015 || process.env.PORT;

//Get the required modules to start the server:
var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

//Get the file system module:
var fs = require("fs");

//Get the hashing modules and create new instances of them:
var jshashes = require("jshashes");
var md5 = new jshashes.MD5;
var sha256 = new jshashes.SHA256;
var sha512 = new jshashes.SHA512;

//Get the cookie module:
var cookie = require("cookie");

//Initiate a new mongodb client:
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
//var mongo_details = JSON.parse(fs.readFileSync("db_credentials.json"));

//Start the server:
http.listen(port, function(){

    console.log("Server started on port " + port);

});

//Serve the public directory to the client:
app.use(express.static(__dirname + "/public/"));