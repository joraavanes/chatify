const path = require('path');
const express = require('express');
const { addUser, removeUser } = require('./helpers/user');

const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

io.on('connection', socket => {
    console.log('A user has connected');

    socket.on('join', ({name, room}) => {
        console.log(socket.id, name, room);
        addUser({id: socket.id, name, room});

        socket.broadcast.to(room).emit('message', `A new friend has joined, Welcome ${name}`);
        socket.join(room);

    });

    socket.on('disconnect', reason => {
        console.log('A user has just left');
        removeUser(socket.id);
    });
});

httpServer.listen(PORT, () => console.log(`Server is running: http://localhost:${PORT}`));