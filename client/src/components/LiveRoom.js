import React from 'react'
import { useDispatch } from 'react-redux'
import LiveRoomItemStyled from './styled/LiveRoomItem.styled';

const LiveRoom = ({room}) => {
    const dispatch = useDispatch();
    
    const handleRoomSelect = () => {
        dispatch({
            type: 'room/selectRoom',
            selectedRoom: room
        });
    }

    return (
        <LiveRoomItemStyled onClick={handleRoomSelect}>
            {room}
        </LiveRoomItemStyled>
    );
};

export default LiveRoom
