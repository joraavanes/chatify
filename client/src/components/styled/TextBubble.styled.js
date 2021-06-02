import styled from 'styled-components'

export default styled.div`
    display: inline-block;
    background-color: ${props => props.backgroundColor ? '#6c6fce' : '#eee'};
    color: ${props => props.backgroundColor ? '#fff' : '#666'};
    border-radius: 20px;
    border-bottom-left-radius: ${props => props.backgroundColor ? '20px' : '0'};
    border-bottom-right-radius: ${props => props.backgroundColor ? '0' : '20px'};
    margin: 5px 0 5px 10px;
    padding: 10px;
    max-width: 45%;
`;