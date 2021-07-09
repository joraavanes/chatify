
const defaultState = {
    rooms: [],
    currentRoom: undefined
};

export default function roomReducer(state = defaultState, action){
    switch (action.type) {
        case 'room/allRooms':
            return {
                ...state,
                rooms: action.rooms
            };
            break;
        default:
            return state;
            break;
    }
}