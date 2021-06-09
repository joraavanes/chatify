import React, { useEffect, useRef } from 'react'
import VerticalContainer from './styled/VerticalContainer.styled'
import Message from './Message'

const Messages = ({messages}) => {
    const $messagesContainer = useRef(null);

    useEffect(() => {
        
        // Scroll down to the last message, using scrollHeight value
        $messagesContainer.current.scrollTo({ 
            top: $messagesContainer.current.scrollHeight,
            behavior: 'smooth'
        });

    }, [messages]);

    return (
        <VerticalContainer ref={$messagesContainer} height="calc(100vh - 60px)" padding="10px" justifyContent="flex-start" overflowY="scroll">
            {messages && messages.map(data => (
                // <p key={data.message}><b>{data.name}</b> : {data.message}</p>
                <Message key={data.messageId} data={data}/>
            ))}
        </VerticalContainer>
    )
}

export default Messages
