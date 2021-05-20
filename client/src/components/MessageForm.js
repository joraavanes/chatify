import React, { useState } from 'react'
import Container from './styled/Container.styled'
import SubmitButton from './styled/SubmitButton.styled'

const MessageForm = ({socket}) => {

    const [message, setMessage] = useState('');
    const [delivered, setDelivered] = useState(false);

    const handleFormSubmit = e => {
        e.preventDefault();
        
        socket.emit('userMessage', {message}, (err, deliverMsg) => {
            if(!err){
                // Todo: give the user delivery notification
            }
        });
        setMessage('');
    }

    return (
        <div style={{padding: 10}}>
            <form noValidate onSubmit={handleFormSubmit}>
                <Container width="80">
                    <input 
                        type="text" 
                        name="message" 
                        id="message" 
                        value={message} 
                        onChange={e => setMessage(e.target.value)}
                        />
                    {/* <input type="submit" value="Send"/> */}
                    <SubmitButton backgroundColor="dodgerblue"/>
                </Container>
            </form>
        </div>
    )
}

export default MessageForm
