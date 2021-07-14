import { combineReducers } from 'redux';
import roomReducer from './roomReducer';

export default combineReducers({
    room: roomReducer
});