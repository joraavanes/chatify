import styled from 'styled-components'

export default styled.input.attrs({
    type: 'text'
})`
    margin: 10px 5px;
    border: 1px solid #eaeaea;
    padding: 5px;
    border-radius: 25px;
    line-height: 1.5rem;
    width: 80%;
    text-indent: 10px;
    font-size: 16px;
    color: #666;

    &:focus{
        /* border-color: #666; */
        outline: none;
    }
    
`;