import styled from "styled-components";

export default styled.select`
width: 100%;
background: #fff;
border: 2px solid #fff;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
height: 52px;
border-radius: 4px;
border: none;
outline: none;
padding: 0 16px;
font-size: 16px;
appearance: none; //desativa o css automático de dispositivo mobile, ignora os padãoes e usa os meus

&:focus{
    border-color: 2px solid ${({theme}) => theme.colors.primary.main};
}
&[disabled]{
    background-color:  ${({theme}) => theme.colors.gray[100]};
    border-color: ${({theme}) => theme.colors.gray[200]};
    opacity: 1;
}
`;
