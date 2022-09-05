var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var userList = [];

app.use(express.static(__dirname + '/1266242-project'));




app.listen(8080, function () {
    console.log('Server is running on port http://localhost:8080');
});