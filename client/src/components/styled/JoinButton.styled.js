import styled from 'styled-components'

export default styled.button.attrs({
    type: 'submit'
})`
    background-color: slateblue;
    border: none;
    border-radius: 5px;
    margin-top: .75rem;
    font-size: 1.25rem;
    color: #fff;
    width: 100%;
    font-weight: bold;
    padding: 10px;
    cursor: pointer;
    transition: box-shadow ease-in-out .7s;

    &:hover{
        box-shadow: 0 0 3px 4px #ccc;
    }
    &:active{
        background-color:#8875ff;
    }
`;