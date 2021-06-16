import React from 'react'
import TextBubbleStyled from './styled/TextBubble.styled'
import Container from './styled/Container.styled'
import MessageDate from './styled/MessageDate.styled'

const Message = ({data}) => {
    return (
        <Container justifyContent="flex-start" alignItems="center" alignRight={data.currentUser} backgroundColor="none">
            {!data.currentUser && <b>{data.name}</b>}
            <TextBubbleStyled backgroundColor={data.currentUser}>
                {data.message}
            </TextBubbleStyled>
            <MessageDate>{new Date(data.date).toLocaleString()}</MessageDate>
        </Container>
    )
}

export default Message
