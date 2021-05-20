import styled from 'styled-components'

export default styled.input.attrs({
    type: 'submit',
    value: 'Send'
})`
    width: 100%;
    height: 40px;
    background-color: ${(props) => props.backgroundColor};
    color: #fff;
    font-weight: bold;
    border:none;
    border-radius: 5px;
    font-family: Georgia, 'Times New Roman', Times, serif;
`;