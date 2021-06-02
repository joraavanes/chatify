const path = require('path');
const express = require('express');
const { v4 } = require('uuid');
const { addUser, removeUser, getUser, getCurrentUsersInRoom } = require('./helpers/user');

const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

io.on('connection', socket => {

    socket.on('join', ({name, room}) => {
        addUser({id: socket.id, name, room});

        const messageId = v4();
        socket.emit('message', {messageId, name: 'admin', message: `Welcome ${name}`});
        socket.broadcast.to(room).emit('message', {messageId, name: 'admin', message: `A new friend has joined, Welcome ${name}`});
        socket.join(room);

        const roomData = getCurrentUsersInRoom(room);
        socket.emit('roomData', roomData);
        socket.broadcast.to(room).emit('roomData', roomData);
    });

    socket.on('userMessage', ({message}, callback) => {
        const {name, room} = getUser(socket.id);

        const messageId = v4();
        socket.emit('message', {messageId, name, message, currentUser: true});
        socket.broadcast.to(room).emit('message', {messageId, name, message});

        callback(undefined, 'Delivered');
    });

    socket.on('disconnect', reason => {
        const user = removeUser(socket.id);
        
        if(!user) return;

        socket.broadcast.to(user.room).emit('message', {name: 'admin', message: `${user.name} has left the room`});

        const roomData = getCurrentUsersInRoom(user.room);
        socket.broadcast.to(user.room).emit('roomData', roomData);
    });
});

httpServer.listen(PORT, () => console.log(`Server is running: http://localhost:${PORT}`));