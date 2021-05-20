import React, { useState } from 'react'
import styled from 'styled-components'
import Container from './styled/Container.styled'

const SubmitButton = styled.input.attrs({
    type: 'submit',
    value: 'Send'
})`
    width: 100%;
    height: 40px;
    background-color: ${(props) => props.backgroundColor};
    color: #fff;
    font-weight: bold;
    border:none;
    border-radius: 5px;
    font-family: Georgia, 'Times New Roman', Times, serif;
`;

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
        <div>
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
