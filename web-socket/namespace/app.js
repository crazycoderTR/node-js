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

const io = socketio.listen(server);
const nsp = io.of('/crazycoder');

nsp.on('connection', (socket) => {
    console.log('User connected');

    socket.on('Send Name', (data) => {
        nsp.emit('Turn back data', {
            name: data.name
        });
    });
});
/*----------------------------------------- Control Structure -----------------------------------------*/