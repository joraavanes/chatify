import styled from 'styled-components'

export default styled.div`
    background-color: #7d81ef;
    border-radius: 20px;
    padding: 10px 8px;
    text-indent: .5em;
    color: #fff;
    margin: 4px 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-height: 21px;

    .desktop{display: inline;}
    .mobile{display: none;}

    @media (max-width: 767px){
        text-indent: 0;
        max-width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;

        .desktop{
            display: none;
        }
        .mobile{
            display: inline;
            font-size: 18px;
        }
    }
`;