import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: ${props => props.alignRight ? 'row-reverse' : 'row'};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    width: ${props => props.width};
    height: ${props => props.height};
    border-top: ${props => props.borderTop};
    padding: ${props => props.padding};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#fff'};
`;