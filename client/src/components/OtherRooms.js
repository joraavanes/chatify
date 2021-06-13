import React from 'react'
import VerticalContainer from './styled/VerticalContainer.styled'

const OtherRooms = ({otherRooms}) => {
    return (
        <VerticalContainer justifyContent="flex-start">
            <h3>Other rooms</h3>
            {otherRooms.map(room => (
                <p key={room}>{room}</p>
            ))}
        </VerticalContainer>
    )
}

export default OtherRooms
