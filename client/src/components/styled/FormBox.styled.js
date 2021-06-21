import styled from 'styled-components'

export default styled.div`
    margin-top:50px;
    background-color: #8f91f5;
    box-shadow: 0 12px 26px -13px #000;
    padding: 35px;
    border-radius: 25px;
    color: #666;
    width: ${props => props.width};

    @media (max-width: 767px){
        width: 50vw;
    }
`;