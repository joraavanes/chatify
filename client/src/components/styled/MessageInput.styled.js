import styled from 'styled-components'

export default styled.input.attrs({
    type: 'text',
    placeholder: 'Text a message here ...'
})`
    margin: 0 5px;
    border: 1px solid #fff;
    padding: 5px;
    border-radius:5px;
    font-size: 18px;
    width: 80%;

    &:focus{
        border-color: #fff;
        outline: none;
    }
`;