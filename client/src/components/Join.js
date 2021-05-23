import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Container from './styled/Container.styled'
import VerticalContainer from './styled/VerticalContainer.styled'
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
            <Container justifyContent="center">
                <H1>Chatify</H1>
            </Container>
            <Container justifyContent="center">
                <form onSubmit={handleFormSubmit}>
                    <FormBox width="25vw">
                        <h2>
                            Join a chat room
                        </h2>
                        <Container justifyContent="space-around" alignItems="center">
                            <label htmlFor="name">Name</label>
                            {/* <input type="text" name="name" id="name" onChange={e => setName(e.target.value)}/> */}
                            <JoinInput name="name" id="name" autoComplete="off" onChange={e => setName(e.target.value)}/>
                        </Container>
                        <Container justifyContent="space-around" alignItems="center">
                            <label htmlFor="room">Room</label>
                            {/* <input type="text" name="room" id="room" onChange={e => setRoom(e.target.value)}/> */}
                            <JoinInput name="room" id="room" autoComplete="off" onChange={e => setRoom(e.target.value)}/>
                        </Container>
                        {/* <button type="submit">Submit</button> */}
                        <JoinButton>Join</JoinButton>
                    </FormBox>
                </form>
            </Container>
        </div>
    )
}

export default Join
