import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Join = () => {
    const history = useHistory();

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const handleFormSubmit = e => {
        e.preventDefault();

        if(name && room)
            history.push(`/chat?name=${name}&room=${room}`);
    };

    return (
        <div>
            <h1>
                Join a chat room
            </h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="room">Room</label>
                    <input type="text" name="room" id="room" onChange={e => setRoom(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Join
