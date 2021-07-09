
const defaultState = {
    rooms: [],
    currentRoom: undefined
};

export default function roomReducer(state = defaultState, action){
    switch (action.type) {
        default:
            return state;
            break;
    }
}