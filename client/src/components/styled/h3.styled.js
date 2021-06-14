import styled from 'styled-components'

export default styled.h3`
    color: ${props => props.color};
    margin: ${props => props.margin || '10px 5px'};
    border-bottom: ${props => props.borderBottom};
    padding: ${props => props.padding || '5px 0'}
`;