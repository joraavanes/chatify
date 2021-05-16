import React, { useState } from 'react'

const MessageForm = ({socket}) => {

    const [message, setMessage] = useState('');

    const handleFormSubmit = e => {
        e.preventDefault();
        
        socket.emit('userMessage', {message});
        setMessage('');
    }

    return (
        <div>
            <form noValidate onSubmit={handleFormSubmit}>
                <input 
                    type="text" 
                    name="message" 
                    id="message" 
                    value={message} 
                    onChange={e => setMessage(e.target.value)}
                    />
                <input type="submit" value="Send"/>
            </form>
        </div>
    )
}

export default MessageForm
