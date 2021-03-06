import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: ${props => props.alignRight ? 'row-reverse' : 'row'};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    width: ${props => props.width};
    height: ${props => props.height};
    min-height: ${props => props.minHeight};
    border-top: ${props => props.borderTop};
    border-radius: ${props => props.borderRadius};
    padding: ${props => props.padding};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#fff'};
`;