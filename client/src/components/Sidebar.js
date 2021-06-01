import React, {useEffect} from 'react'

const Sidebar = ({roomData}) => {

    useEffect(() => {
        
        return () => {
            
        }
    }, [roomData]);

    return (
        <div style={{border: '1px solid #ccc', width: '20vw'}}>
            <h3>{roomData.room} <span>{roomData.users && roomData.users.length} roommate(s)</span></h3>
            {roomData.users && roomData.users.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}

export default Sidebar
