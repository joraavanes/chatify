import React, {useEffect} from 'react'
import UserInfo from './styled/UserInfo.styled';
import VerticalContainer from './styled/VerticalContainer.styled'

const Sidebar = ({roomData}) => {

    useEffect(() => {
        
        return () => {
            
        }
    }, [roomData]);

    return (
        <VerticalContainer width="20vw" height="100vh" justifyContent="flex-start" backgroundColor="#8f91f5">
            <h3>{roomData.room} <span>{roomData.users && roomData.users.length} roommate(s)</span></h3>
            {roomData.users && roomData.users.map(user => (
                <UserInfo key={user.id}>
                    <span>{user.name}</span>
                </UserInfo>
            ))}
        </VerticalContainer>
    );
}

export default Sidebar
