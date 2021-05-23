import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Container from './styled/Container.styled'
import H1 from './styled/h1.styled'
import FormBox from './styled/FormBox.styled'
import JoinInput from './styled/JoinInput.styled'
import JoinButton from './styled/JoinButton.styled'

const Join = () => {
    const history = useHistory();

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const handleFormSubmit = e => {
        e.preventDefault();

        if(name && room)
            history.push(`/chat?name=${name}&room=${room}`);
    };

    return (
        <div>
            <H1>
                Join a chat room
            </H1>
            <Container justifyContent="center">
                <form onSubmit={handleFormSubmit}>
                    <FormBox>
                        <div>
                            <label htmlFor="name">Name</label>
                            {/* <input type="text" name="name" id="name" onChange={e => setName(e.target.value)}/> */}
                            <JoinInput onChange={e => setName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="room">Room</label>
                            {/* <input type="text" name="room" id="room" onChange={e => setRoom(e.target.value)}/> */}
                            <JoinInput onChange={e => setRoom(e.target.value)}/>
                        </div>
                        {/* <button type="submit">Submit</button> */}
                        <JoinButton>Join</JoinButton>
                    </FormBox>
                </form>
            </Container>
        </div>
    )
}

export default Join
