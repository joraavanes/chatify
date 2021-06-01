import styled from 'styled-components'

export default styled.input.attrs({
    type: 'submit',
    value: 'Send'
})`
    width: 20%;
    height: 40px;
    background-color: ${(props) => props.backgroundColor};
    color: #fff;
    font-weight: bold;
    border:none;
    border-radius: 20px;
    font-family: Cabin,Georgia, 'Times New Roman', Times, serif;
    font-size: 18px;

    &:hover{
        background-color: #5758f5;
        cursor: pointer;
    }
`;