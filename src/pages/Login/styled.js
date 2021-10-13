import styled from 'styled-components';

export const AreaLogin = styled.div`

    background-color: #fff;
    padding: 30px;
    max-width: 300px;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #ccc;

    h1{
        font-size: 24px;
    }

    .form--input{
        text-align: left;

        label{
            display: block;
        }

        input{
            outline: none;
            padding: 10px;
            width: 280px;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 16px;
            margin-bottom: 20px;
            transition: 0.3s;

            &:hover{
                border: 2px solid #7d2ae8;
            }
        }
    }
`;

