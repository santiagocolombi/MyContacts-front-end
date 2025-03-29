import styled from "styled-components";

export const Container = styled.div`
& + &{
    margin-top: 16px;
}
    small{
        color: ${({theme}) => theme.colors.danger.main};
        font-size: 12px;  //tamanho dos quadrados menores
        display: block;
        margin-top: 8px;
    }
    .form-item{
        position: relative; //criei a div apenas para alinhar o ícone de carregamento
        .loader{
        position: absolute;
        top: 18px;
        right: 16px;
        }

    }
`;
