import React, { useState } from 'react'
import Container from './styled/Container.styled'
import MessageInput from './styled/MessageInput.styled'
import SubmitButton from './styled/SubmitButton.styled'

const MessageForm = ({socket}) => {

    const [message, setMessage] = useState('');
    const [delivered, setDelivered] = useState(false);

    const handleFormSubmit = e => {
        e.preventDefault();
        
        if(message.trim().length == 0) return;

        socket.emit('userMessage', {message}, (err, deliverMsg) => {
            if(!err){
                // Todo: give the user delivery notification
            }
        });
        setMessage('');
    }

    return (
        <Container borderTop="1px solid #ddd" padding="10px">
            <form noValidate onSubmit={handleFormSubmit} style={{width: '100%'}}>
                <Container justifyContent="space-around">
                    <MessageInput
                        name="message" 
                        id="message" 
                        value={message} 
                        onChange={e => setMessage(e.target.value)}
                        autoComplete="off"
                        />
                    {/* <input type="submit" value="Send"/> */}
                    <SubmitButton backgroundColor="dodgerblue"/>
                </Container>
            </form>
        </Container>
    )
}

export default MessageForm
