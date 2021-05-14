import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SocketIO from 'socket.io-client'
import qs from 'querystring'

let socket;

const Chat = () => {
    const location = useLocation();

    useEffect(() => {
        socket = new SocketIO();

        const userInfo = qs.parse(location.search.slice(1));
        socket.emit('join', userInfo);

        return () => {
            socket.disconnect();
        }
    }, []);

    return (
        <div>
            Chat
        </div>
    )
}

export default Chat
