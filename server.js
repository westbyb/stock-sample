var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = 3000;

app.use(express.static(__dirname + '/build'));

app.get('*', function(req, res) {
  res.sendFile(app.use(express.static(__dirname + '/build')) + '/index.html');
});

http.listen(3000, function(){
  console.log('Server started listening on *:3000');
});