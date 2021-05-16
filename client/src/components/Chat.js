import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SocketIO from 'socket.io-client'
import qs from 'querystring'
import MessageForm from './MessageForm';

let socket;

const Chat = () => {
    const location = useLocation();

    const [userInfo, setUserInfo] = useState({});
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket = new SocketIO();
        console.log(socket);
        const userInfo = qs.parse(location.search.slice(1));
        setUserInfo(userInfo);

        // Emits join event
        socket.emit('join', userInfo);

        // Listens the message event from others
        socket.on('message', data => {
            setMessages(arr => [...arr, data]);
        });

        return () => {
            socket.disconnect();
        }
    }, [location.search]);

    useEffect(() => {


    }, [messages]);

    return (
        <div>
            {messages && messages.map(data => (
                <p key={data.message}><b>{data.name}</b> says: {data.message}</p>
            ))}
            {socket &&
                <MessageForm socket={socket}/>
            }
        </div>
    )
}

export default Chat
