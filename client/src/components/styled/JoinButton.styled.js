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
`;