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
    setTimeout(() => {
        socket.emit('message', {message: 'Welcome to server'});
    }, 1000);
    socket.on('Message', (data) => {
        console.log(data);
    });    
    socket.on('disconnect', () => {
        console.log('User disconnect!');
    });
});

/*----------------------------------------- Control Structure -----------------------------------------*/