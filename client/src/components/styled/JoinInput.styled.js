import styled from 'styled-components'

export default styled.input.attrs({
    type: 'text'
})`
    margin: 5px 5px;
    border: 1px solid #eaeaea;
    padding: 5px;
    border-radius:5px;
    width: 80%;

    &:focus{
        border-color: #666;
        outline: none;
    }
    
`;