import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SocketIO from 'socket.io-client'
import qs from 'querystring'

let socket;

const Chat = () => {
    const location = useLocation();

    const [userInfo, setUserInfo] = useState({});
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket = new SocketIO();

        const userInfo = qs.parse(location.search.slice(1));
        setUserInfo(userInfo);

        // Emits join event
        socket.emit('join', userInfo);

        // Listens the message event from others
        socket.on('message', msgStr => {
            // const newMessages = messages.concat(msgStr);
            setMessages(arr => [...arr, msgStr]);
        });

        return () => {
            socket.disconnect();
        }
    }, [location.search]);

    useEffect(() => {


    }, [messages]);

    return (
        <div>
            {messages && messages.map(message => (
                <p>{message}</p>
            ))}
        </div>
    )
}

export default Chat
