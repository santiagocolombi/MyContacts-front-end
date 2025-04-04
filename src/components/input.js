import styled, {css} from "styled-components";

export default styled.input`
width: 100%;
background: #fff;
border: 2px solid #fff;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
height: 52px;
border-radius: 4px;
outline: none;
padding: 0 16px;
font-size: 16px;

&:focus{
    border-color: 2px solid ${({theme}) => theme.colors.primary.main};
    box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.primary.main};
}

${({ theme, error }) =>
    error &&
    css`
      color: ${theme.colors.danger.main};
      border-color: ${theme.colors.danger.main} !important;
    `}

    &[disabled]{
    background-color:  ${({theme}) => theme.colors.gray[100]};
    border-color: ${({theme}) => theme.colors.gray[200]};
    }
`;
