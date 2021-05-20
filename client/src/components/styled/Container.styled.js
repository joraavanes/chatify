import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: ${props => props.width};
`;