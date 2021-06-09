import React, {useEffect} from 'react'
import RoomInfo from './styled/RoomInfo.styled';
import UserInfo from './styled/UserInfo.styled';
import VerticalContainer from './styled/VerticalContainer.styled'

const Sidebar = ({roomData}) => {

    useEffect(() => {
        
        return () => {
            
        }
    }, [roomData]);

    return (
        <VerticalContainer width="20vw" height="100vh" justifyContent="flex-start" backgroundColor="#8f91f5" boxShadow="10px 0 30px -9px #ccc">
            <RoomInfo>
                <h2 style={{padding: '4px 0', margin: 0}}>{roomData.room}</h2>
                <span>{roomData.users && roomData.users.length} people</span>
            </RoomInfo>
            {roomData.users && roomData.users.map(user => (
                <UserInfo key={user.id}>
                    <span>{user.name}</span>
                </UserInfo>
            ))}
        </VerticalContainer>
    );
}

export default Sidebar
