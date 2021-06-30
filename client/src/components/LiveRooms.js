import React from 'react'
import Container from './styled/Container.styled'
import H3 from './styled/h3.styled'
import LiveRoomsListStyled from './styled/LiveRoomsList.styled'
import LiveRoomsItemStyled from './styled/LiveRoomItem.styled';
import NoRoomMessageStyled from './styled/NoRoomMessage.styled';

const LiveRooms = ({liveRooms}) => {
    return (
        <>
            <H3 color="#fff">Or choose from live rooms</H3>
            <Container borderRadius="25px" backgroundColor="#fff">
                <LiveRoomsListStyled>
                    {liveRooms.length == 0 && <NoRoomMessageStyled>* Currently, there are no live rooms</NoRoomMessageStyled>}
                    {liveRooms.map(room => (
                        <LiveRoomsItemStyled key={room}>{room}</LiveRoomsItemStyled>
                    ))}
                </LiveRoomsListStyled>
            </Container>
        </>
    )
}

export default LiveRooms
