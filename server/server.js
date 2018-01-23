var express = require('express');
var http = require('http');
var socketIo = require('socket.io');

var app = express();
app.get('/', function (req, res) {
  res.send('Hello Qamar');
});

var server = http.createServer(app);
server.listen(3000);
var io = socketIo(server);
io.on('connection', function (socket) {
  socket.emit('Hello', {
    greeting: 'Hello Qamar'
  });
});
