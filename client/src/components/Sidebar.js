import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import RoomInfo from './styled/RoomInfo.styled';
import UserInfo from './styled/UserInfo.styled';
import VerticalContainer from './styled/VerticalContainer.styled'
import QuitButton from './styled/QuitButton.styled';
import OtherRooms from './OtherRooms';

const Sidebar = ({roomData, otherRooms}) => {
    const history = useHistory();


    useEffect(() => {
        
        return () => {
            
        }
    }, [roomData]);

    const handleQuit = e => history.push('/');

    return (
        <VerticalContainer width="20vw" height="100vh" justifyContent="flex-start" backgroundColor="#8f91f5" boxShadow="10px 0 30px -9px #ccc" mobileWidth="12vw">
            <RoomInfo>
                <h2 style={{padding: '4px 0', margin: 0}}>{roomData.room}</h2>
                <span>{roomData.users && roomData.users.length} people</span>
            </RoomInfo>
            {roomData.users && roomData.users.map(user => (
                <UserInfo key={user.id}>
                    <span>{user.name}</span>
                </UserInfo>
            ))}
            <QuitButton onClick={handleQuit}>Quit</QuitButton>
            <OtherRooms otherRooms={otherRooms}/>
        </VerticalContainer>
    );
}

export default Sidebar
