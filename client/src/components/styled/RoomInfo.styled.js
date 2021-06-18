import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #7d81ef;
    background-color: #a4f0e4;
    border-radius: 30px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding: 0 0 4px;
    margin: 0 0 24px;
    box-shadow: -6px 3px 4px 4px;
    text-align: center;

    h2{
        padding: 4px 0;
        margin: 0;
        display: block;
    }
    h2.mobile{
        display: none;
    }

    span.speakers{
        display: inline-block;
    }
    span.speakers-mobile{
        display: none;
    }


    @media (max-width: 767px){

        h2{
            display: none;
        }

        h2.mobile{
            display: block;
            padding: 4px 0;
            margin: 0;
        }

        span.speakers{
            display: none;
        }
        span.speakers-mobile{
            display: flex;
            background-color: #fff;
            color: #7d81ef;
            border-radius: 50%;
            width: 1.25rem;
            height: 1.25rem;
            justify-content: center;
            align-items: center;
            margin: 0 0 5px 0;
        }
    }
`;