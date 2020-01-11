/**************************************************************/
//server 
/**************************************************************/
var express = require('express');
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);
console.log('server running');

/**************************************************************/
function newConnection(socket){
	console.log('newConnection: ' + socket.id);
	
	socket.on('mouse', mouseMsg);
	
	function mouseMsg(data){
		socket.broadcast.emit('mouse', data);
	}
}

/**************************************************************/
//			END OF APP
/**************************************************************/