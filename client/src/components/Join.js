import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Container from './styled/Container.styled'
import VerticalContainer from './styled/VerticalContainer.styled'
import H1 from './styled/h1.styled'
import FormBox from './styled/FormBox.styled'
import JoinInput from './styled/JoinInput.styled'
import JoinButton from './styled/JoinButton.styled'
import SocketIO from 'socket.io-client'
import LiveRooms from './LiveRooms'

let socket;

const Join = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [liveRooms, setLiveRooms] = useState([]);
    const selectedRoom = useSelector(state => state.room.selectedRoom);

    const handleFormSubmit = e => {
        e.preventDefault();

        dispatch({
            type: 'room/selectRoom',
            selectedRoom: undefined
        });

        if(name && room)
            history.push(`/chat?name=${name}&room=${room}`);
    };

    useEffect(() => {
        socket = SocketIO();

        socket.emit('allRooms');
        
        socket.on('checkRooms', () => {
            socket.emit('allRooms');
        });

        socket.on('allRooms', data => {
            setLiveRooms(data);
            dispatch({
                type: 'room/allRooms',
                rooms: data
            });
        });

        return () => {
            socket.disconnect();
            socket.off();
        };
    }, []);

    useEffect(() => {
        setRoom(selectedRoom);
    }, [selectedRoom]);

    return (
        <div>
            <Container justifyContent="center">
                <H1>Chatify</H1>
            </Container>
            <Container justifyContent="center">
                <form onSubmit={handleFormSubmit}>
                    <FormBox width="25vw">
                        <h2 style={{color: '#fff'}}>
                            Create a chat room
                        </h2>
                        <Container justifyContent="space-around" alignItems="center" backgroundColor="#8f91f5">
                            <label htmlFor="name" style={{color: '#fff'}}>Name</label>
                            <JoinInput name="name" id="name" autoComplete="off" defaultValue={name} onChange={e => setName(e.target.value)}/>
                        </Container>
                        <Container justifyContent="space-around" alignItems="center" backgroundColor="#8f91f5">
                            <label htmlFor="room" style={{color: '#fff'}}>Room</label>
                            <JoinInput name="room" id="room" autoComplete="off" defaultValue={room} onChange={e => setRoom(e.target.value)}/>
                        </Container>
                        <VerticalContainer backgroundColor="#8f91f5" justifyContent="flex-start" height="auto">
                            <LiveRooms liveRooms={liveRooms}/>
                        </VerticalContainer>
                        <JoinButton>Join</JoinButton>
                    </FormBox>
                </form>
            </Container>
        </div>
    )
}

export default Join
