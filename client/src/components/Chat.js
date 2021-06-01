import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SocketIO from 'socket.io-client'
import qs from 'querystring'
import MessageForm from './MessageForm';
import Sidebar from './Sidebar';
import Container from './styled/Container.styled'
import VerticalContainer from './styled/VerticalContainer.styled'
import Messages from './Messages';

let socket;

const Chat = () => {
    const location = useLocation();

    const [userInfo, setUserInfo] = useState({});
    const [roomData, setRoomData] = useState({});
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket = new SocketIO();
        
        const userInfo = qs.parse(location.search.slice(1));
        setUserInfo(userInfo);

        // Emits join event
        socket.emit('join', userInfo);

        // Listens the message event from others
        socket.on('message', data => {
            setMessages(arr => [...arr, data]);
        });

        socket.on('roomData', data => {
            setRoomData(data);
        });

        return () => {
            socket.disconnect();
            socket.off();
        }
    }, [location.search]);

    useEffect(() => {
        

    }, [roomData]);

    return (
        <Container height="100vh" justifyContent="space-around">
            <Sidebar roomData={roomData}/>
            <VerticalContainer width="80vw" height="100vh">
                {/* <div>
                    {messages && messages.map(data => (
                        <p key={data.message}><b>{data.name}</b> says: {data.message}</p>
                    ))}
                </div> */}
                <Messages messages={messages}/>
                {socket &&
                    <MessageForm socket={socket}/>
                }
            </VerticalContainer>
        </Container>
    )
}

export default Chat
