let users = [];

// Stores user in the users array
const addUser = ({id, name, room}) => {
    name = name.trim().toLowerCase().replace(' ', '-');
    room = room.trim().toLowerCase().replace(' ', '-');

    const isUserExists = users.some(user => user.name == name && user.room == room);

    if(isUserExists){
        name = `name-${Math.round(Math.random() * 100)}`;
    }

    users.push({id, name, room});
    console.log(users);
};

// Removes user from the users array
const removeUser = (id) => {
    const removedUser = users.find(user => user.id == id);
    users = users.filter(user => user.id !== id);
    return removedUser;
};

const getCurrentUsersInRoom = room => users.filter(user => user.room == room);

module.exports = {
    addUser,
    removeUser,
    getCurrentUsersInRoom
};