let users = [];

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

const removeUser = (id) => {
    users = users.filter(user => user.id !== id);
};

const getCurrentUsersInRoom = room => users.filter(user => user.room == room);

module.exports = {
    addUser,
    removeUser,
    getCurrentUsersInRoom
};