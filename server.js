const path = require('path');
const express = require('express');
const { addUser, removeUser, getUser } = require('./helpers/user');

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

        socket.emit('message', {name: 'admin', message: `Welcome ${name}`});
        socket.broadcast.to(room).emit('message', {name: 'admin', message: `A new friend has joined, Welcome ${name}`});
        socket.join(room);
    });

    socket.on('userMessage', ({message}) => {
        const {name, room} = getUser(socket.id);
        socket.emit('message', {name, message});
        socket.broadcast.to(room).emit('message', {name, message});
    });

    socket.on('disconnect', reason => {
        const {name, room} = removeUser(socket.id);
        socket.broadcast.to(room).emit('message', {name: 'admin', message: `${name} has left the room`});
    });
});

httpServer.listen(PORT, () => console.log(`Server is running: http://localhost:${PORT}`));