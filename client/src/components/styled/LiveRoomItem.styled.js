import styled from 'styled-components';

export default styled.li`
    border-radius: 25px;
    border: #ccc dashed 4px;
    display: inline-block;
    padding: 10px;
    margin: 5px;
    transition: all ease-in-out .4s;

    &:hover{
        background-color: #f38abc;
        border: #f38abc solid 4px;
        color: #fff;
        cursor: pointer;
        box-shadow: 0 4px 4px 1px #ccc;
    }
`;