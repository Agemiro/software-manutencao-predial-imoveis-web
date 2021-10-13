import styled from 'styled-components';

//mudou a o distanciamente(criou uma area) e mudou a cor de fundo
export const AreaHeader = styled.div`
    height: 60px;
    background-image: linear-gradient(to right, #fff, #ccc);
    color: #fff;

    .container{
        padding: 5px 20px;
        display: flex;
        align-itens: center;
    }

        .logo{
            flex: 1;

            img{
                width: 200px;
            }
        }

        nav{
            ul{
                display: flex;
            }
            li{
                list-style: none;
                margin-left: 20px;

                a{
                    text-decoration: none;
                    color: #010101;

                    &: hover{
                        color: #0649BA;
                    }
                }
            }
        }
`;