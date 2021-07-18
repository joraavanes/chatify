const { v4 } = require('uuid');
const { addUser, removeUser, getUser, getCurrentUsersInRoom, getOtherRooms, getAllRooms } = require('../helpers/user');

// Initialize socket.io Server
module.exports = function(io){
    io.on('connection', socket => {

        socket.on('join', ({name, room}) => {
            addUser({id: socket.id, name, room});
    
            const messageId = v4();
            room = room.toLowerCase().replace(' ', '-');
    
            socket.emit('message', {messageId, name: 'admin', message: `Welcome ${name}`, date: new Date().valueOf() });
            socket.broadcast.to(room).emit('message', {messageId, name: 'admin', message: `A new friend has joined, Welcome ${name}`, date: new Date().valueOf() });
            socket.join(room);
    
            const roomData = getCurrentUsersInRoom(room);
            socket.emit('roomData', roomData);
            socket.broadcast.to(room).emit('roomData', roomData);
    
            io.sockets.emit('checkRooms');
    
            // io.sockets.emit('otherRooms', otherRooms);
            // socket.broadcast.emmit('otherRooms', otherRooms);
        });
    
        socket.on('userMessage', ({message}, callback) => {
            const user = getUser(socket.id);
    
            if(!user) return;
    
            const messageId = v4();
            socket.emit('message', {messageId, name: user.name, message, currentUser: true, date: new Date().valueOf() });
            socket.broadcast.to(user.room).emit('message', {messageId, name: user.name, message, date: new Date().valueOf() });
    
            callback(undefined, 'Delivered');
        });
    
        socket.on('otherRooms', () => {
            const user = getUser(socket.id);
            const otherRooms = getOtherRooms(user?.room);
            socket.emit('otherRooms', otherRooms);
        });
    
        socket.on('allRooms', () => {
            socket.emit('allRooms', getAllRooms());
        });
    
        socket.on('disconnect', reason => {
            const user = removeUser(socket.id);
            
            if(!user) return;
    
            const messageId = v4();
            socket.broadcast.to(user.room).emit('message', {messageId, name: 'admin', message: `${user.name} has left the room`, date: new Date().valueOf() });
    
            const roomData = getCurrentUsersInRoom(user.room);
            socket.broadcast.to(user.room).emit('roomData', roomData);
    
            io.sockets.emit('checkRooms');
        });
    });
};