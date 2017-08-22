var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = 3000;

app.use(express.static(__dirname + '/build'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('*', function(req, res) {
  res.sendFile('/index.html');
});

http.listen(3000, function(){
  console.log('Server started listening on *:3000');
});