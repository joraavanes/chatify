import styled, {css} from 'styled-components'

export default styled.div`
    margin: 8px 6px;
    color: #fff;
    background-color: #f38abc;
    border-radius: 20px;
    padding: 10px 8px;
    text-indent: 8px;
    transition: all ease-out .7s;

    &:hover{
        background-color: #fd72b4;
        box-shadow: 0 4px 4px 3px #7d81ef;
        transform: translateY(-2px);
        cursor: pointer;
    }
`;