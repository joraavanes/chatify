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

httpServer.listen(PORT, () => console.log(`Server is running: http://localhost:${PORT}`));