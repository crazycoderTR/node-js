"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const http = require('http');
const socketio = require('socket.io');
/*---------------------------------------- Variable Definition ----------------------------------------*/

/*----------------------------------------- Control Structure -----------------------------------------*/
const server = http.createServer((req, res) => {
    res.end('Hi!');
});
server.listen(3000);

const io = socketio.listen(server); // We created enable TCP connection.
io.sockets.on('connection', (socket) => {
    // It will work when any user is connected
    console.log('User connected!');

    socket.on('new-user', (data) => {
        socket.broadcast.emit('users', {name: data.name});
    });

    socket.on('disconnect', () => {
        console.log('User disconnect!');
    });
});

/*----------------------------------------- Control Structure -----------------------------------------*/