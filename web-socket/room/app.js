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

    // Create or join room
    socket.on('join-room', (data) => {
        socket.join(data.name, () => {
            socket.to(data.name).emit('you-join'); // Sent to everyone in the room except himself
            io.to(data.name).emit('new-join', { count: getOnlineUsers(io, data)  }); // Sent to both himself and to others in the room
            socket.emit('you-joined', {message: 'You joined to room'});
            const rooms = Object.keys(socket.rooms);
            console.log(rooms);
        });
        socket.on('leave-room', (data) => {
            socket.leave(data.name, () => {
                io.to(data.name).emit('leavedRoom', { count: getOnlineUsers(io, data) });
                socket.emit('socket.leave', {message: 'You leaved room'});
            });
        });
    });
});

const getOnlineUsers = (io, data) => {
    const room = io.sockets.adapter.rooms[data.name];
    return room ? room.length - 1 : 0;
}; // How many people are in the room

/*----------------------------------------- Control Structure -----------------------------------------*/