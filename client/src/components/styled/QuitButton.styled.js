import styled from 'styled-components';

export default styled.button`
    background-color: #fff;
    margin: 10px 8px 4px;
    padding: 8px 8px;
    border: 2px solid #fff;
    border-radius: 18px;
    transition: background-color,color ease-in-out,ease-in-out .4s,.4s;

    &:hover{
        background-color: #f18386;
        color: #fff;
        cursor: pointer;
        border: 2px solid #fff;
    }
`;