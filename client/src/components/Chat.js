import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SocketIO from 'socket.io-client'
import qs from 'querystring'

let socket;

const Chat = () => {
    const location = useLocation();

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket = new SocketIO();

        const userInfo = qs.parse(location.search.slice(1));
        socket.emit('join', userInfo);

        // Listens the message event from others
        socket.on('message', msgStr => {
            console.log(msgStr);
            setMessages([...messages, msgStr]);
        });

        return () => {
            socket.disconnect();
        }
    }, []);

    useEffect(() => {


    }, [messages]);

    return (
        <div>
            Chat
        </div>
    )
}

export default Chat
