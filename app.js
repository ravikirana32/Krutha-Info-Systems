/*global require, __dirname, console*/
var express = require('express'),
    bodyParser = require('body-parser'),
    errorhandler = require('errorhandler'),
    morgan = require('morgan'),
    fs = require("fs");

    var app = require('express')();
    var http = require('http').Server(app);
    //var ioc = require('socket.io')(http);
    //var request = require("request");
    //var io = require('socket.io-client');
    //var sockets = io.connect('http://localhost:4080');

    

var options = {
    key: fs.readFileSync('cert/key.pem').toString(),
    cert: fs.readFileSync('cert/cert.pem').toString()
};

//var app = express();

app.use(express.static(__dirname + '/www'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



http.listen(3000, function(){
  console.log('Server running At :3000');
});
