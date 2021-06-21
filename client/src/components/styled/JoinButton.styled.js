import styled from 'styled-components'

export default styled.button.attrs({
    type: 'submit'
})`
    background-color: #a4f0e4;
    border: none;
    border-radius: 25px;
    margin-top: .75rem;
    font-size: 1.25rem;
    color: #7d81ef;
    width: 100%;
    font-weight: bold;
    padding: 10px;
    cursor: pointer;
    transition: box-shadow ease-in-out .7s;

    &:hover{
        /* box-shadow: 0 0 3px 4px #ccc; */
    }
    &:active{
        background-color: #59ecd5;
    }
`;