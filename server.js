const path = require('path');
const express = require('express');

const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.sendFile('index.html');
});

io.on('connection', socket => {
    console.log('A user has connected');

    socket.on('disconnect', reason => {
        console.log('A user has just left');
    });
});

httpServer.listen(PORT, () => console.log(`Server is running: http://localhost:${PORT}`));