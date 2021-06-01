import React from 'react'
import TextBubbleStyled from './styled/TextBubble.styled'
import Container from './styled/Container.styled'

const Message = ({data}) => {
    return (
        <Container justifyContent="flex-start" alignItems="center">
            <b>
                {data.name}
            </b>
            <TextBubbleStyled>
                {data.message}
            </TextBubbleStyled>
        </Container>
    )
}

export default Message
