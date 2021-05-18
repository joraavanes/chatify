import React, {useEffect} from 'react'

const Sidebar = ({roomData}) => {

    useEffect(() => {
        
        console.log(roomData);

        return () => {
            
        }
    }, [roomData]);

    return (
        <div style={{border: '1px solid #ccc'}}>
            <h3>{roomData.room} <span>{roomData.users && roomData.users.length} roommate(s)</span></h3>
            {roomData.users && roomData.users.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}

export default Sidebar
