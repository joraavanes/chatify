import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    width: ${props => props.width};
    height: ${props => props.height}
`;