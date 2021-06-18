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
                <h2>{roomData.room}</h2>
                <h2 className="mobile" title={roomData.room && roomData.room}>{roomData.room && roomData.room.substr(0, 1).toUpperCase()}</h2>
                <span className="speakers">{roomData.users && roomData.users.length} people</span>
                <span className="speakers-mobile" title={roomData.users && roomData.users.length + ' people'}>{roomData.users && roomData.users.length}</span>
            </RoomInfo>
            {roomData.users && roomData.users.map(user => (
                <UserInfo key={user.id}>
                    <span className="desktop">{user.name}</span>
                    <span className="mobile">{user.name.substr(0, 1).toUpperCase()}</span>
                </UserInfo>
            ))}
            <QuitButton onClick={handleQuit}>Quit</QuitButton>
            <OtherRooms otherRooms={otherRooms}/>
        </VerticalContainer>
    );
}

export default Sidebar
