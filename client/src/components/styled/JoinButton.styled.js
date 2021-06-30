import styled from 'styled-components'

export default styled.button.attrs({
    type: 'submit'
})`
    background-color: #a4f0e4;
    border: none;
    border-radius: 25px;
    margin-top: 1.25rem;
    font-size: 1.25rem;
    color: #7d81ef;
    width: 100%;
    font-weight: bold;
    padding: 10px;
    cursor: pointer;
    transition: all ease-in-out .5s;

    &:hover,
    &:focus{
        /* box-shadow: 0 0 3px 4px #ccc; */
        box-shadow: 0px 3px 8px 2px #6266e0;
        transform: translateY(-3px);
        outline:none;
    }
    &:active{
        background-color: #59ecd5;
    }
`;