import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.backgroundColor};
    padding: ${props => props.padding};
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'space-between'};
    height: ${props => props.height ? props.height : `80vh`};
    width: ${props => props.width};
    padding: ${props => props.padding};
    overflow: ${props => props.overflow};
    overflow-y: ${props => props.overflowY};
    box-shadow: ${props => props.boxShadow};
`;