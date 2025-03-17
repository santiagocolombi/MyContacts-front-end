
import styled from "styled-components"
export const Container = styled.header`
display: flex;
flex-direction: column; /* Alinha os itens em uma coluna */
align-items: flex-start; /* Alinha tudo à esquerda */
width: 100%; /* Garante que o Container ocupe toda a largura disponível */
padding: 20px 0; /* Adiciona um pouco de padding nas laterais se necessário */

a {
    display: flex; /* Torna o link um flex container */
    align-items: center; /* Alinha verticalmente */
    text-decoration: none;
    span{
        color: ${({theme }) => theme.colors.primary.main};
        font-weight: bold;

     }
    img{
        margin-right: 8px;
        transform: rotate(-90deg);

    }
}   h1{
    font-size: 24px;
}
`;
