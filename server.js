const path = require('path');
const express = require('express');
const createSocket = require('./socket/');

const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

createSocket(io);

httpServer.listen(PORT, () => console.log(`Server is running: http://localhost:${PORT}`));