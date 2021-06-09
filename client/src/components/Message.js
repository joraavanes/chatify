import React from 'react'
import TextBubbleStyled from './styled/TextBubble.styled'
import Container from './styled/Container.styled'

const Message = ({data}) => {
    return (
        <Container justifyContent="flex-start" alignItems="center" alignRight={data.currentUser} backgroundColor="none">
            {!data.currentUser && <b>{data.name}</b>}
            <TextBubbleStyled backgroundColor={data.currentUser}>
                {data.message}
            </TextBubbleStyled>
        </Container>
    )
}

export default Message
