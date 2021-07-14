
const defaultState = {
    rooms: [],
    currentRoom: undefined,
    selectedRoom: undefined
};

export default function roomReducer(state = defaultState, action){
    switch (action.type) {
        case 'room/allRooms':
            return {
                ...state,
                rooms: action.rooms
            };
            break;
        case 'room/selectRoom':
            return {
                ...state,
                selectedRoom: action.selectedRoom
            };
        default:
            return state;
            break;
    }
}