import React from 'react'
import H3 from './styled/h3.styled'
import VerticalContainer from './styled/VerticalContainer.styled'
import OtherRoom from './styled/OtherRoom.styled'

const OtherRooms = ({otherRooms}) => {
    return (
        <VerticalContainer justifyContent="flex-start" padding="0 8px">
            <H3 color="#fff" margin="40px 0 5px 0" borderBottom="2px solid #7d81ef">Other rooms</H3>
            {otherRooms.map(room => (
                <OtherRoom key={room} title={room}>
                    <span>{room}</span>
                </OtherRoom>
            ))}
        </VerticalContainer>
    )
}

export default OtherRooms
