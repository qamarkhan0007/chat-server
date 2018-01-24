var express = require('express');
var http = require('http');
var socketIo = require('socket.io');

var app = express();
app.get('/', function (req, res) {
  res.send('Hello Qamar');
});

var server = http.createServer(app);
var io = socketIo(server);
io.on('connection', function(socket){

  socket.on('disconnect', function(){
    io.emit('users-changed', {user: socket.nickname, event: 'left'});
  });

  socket.on('set-nickname', function(nickname){
    socket.nickname = nickname;
    io.emit('users-changed', {user: nickname, event: 'joined'});
  });

  socket.on('add-message', function(message){
    io.emit('message', {text: message.text, from: socket.nickname, created: new Date()});
  });
});
server.listen(3000, function(){
  console.log('Server is running on 3000');
});
