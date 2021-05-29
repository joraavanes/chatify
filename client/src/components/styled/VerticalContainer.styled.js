import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: ${props => props.height ? props.height : `80vh`};
    width: 80vw;
`;