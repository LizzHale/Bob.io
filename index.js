var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

// TODO: change 3000 to pull from an environment variable PORT
http.listen(3000, function(){
  console.log('listening on *:3000');
});
