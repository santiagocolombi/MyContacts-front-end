import styled from "styled-components";

export const Container = styled.div`
    margin-top: 32px;
    width: 100%;
    max-width: 100%;

`;
export const Header = styled.header`
display:  flex;
align-items: center;
justify-content: space-between;
margin-top: 32px;


    h1{
        color: ${({theme}) => theme.colors.gray[900]};
        font-size: 24px;

    }


    a{
        color: ${({theme}) => theme.colors.primary.main};
        text-decoration: none;
        font-weight: bold;
        border: 2px solid ${({theme})=> theme.colors.primary.main};
        padding: 8px 16px;
        border-radius: 4px;
        transition: all 0.2s ease-in;


        &:hover{
            background: ${({theme}) => theme.colors.primary.main};
            color: #fff;
        }
    }
`;
export const ListContainer = styled.div`
    margin-top: 24px;

    header{
    margin-bottom: 8px ;
        button{
        background: transparent;
        border: none;
        display: flex;
        align-items: center;

            span{
                margin-right: 8px;
                font-weight: bold;
                color: ${({theme})=> theme.colors.primary.main};
            }
    }

    }
`;
export const Card = styled.div`
    background: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    padding: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + & {
        margin-top: 16px;    //esse & + & quer dizer que sempre que ter um elemento qualquer seguido de um mesmo elemento,
                             // eu quero ele com padding 16px entre eles, no caso card seguido de card
    }

    .info{
        .contact-name{
            display: flex;
            align-items: center;

            small{
                background: ${({theme}) => theme.colors.primary.lighter};
                color: ${({theme}) => theme.colors.primary.main};
                font-weight: bold;
                text-transform: uppercase;
                padding: 4px;
                border-radius: 4px;
                margin-left: 8px;
            }
        }

        span{
            display:block;
            font-size: 14px;
            color: ${({theme}) => theme.colors.gray[200]}

        }
    }

    .actions{
        display: flex;
        align-items: center;
        button{
            background: transparent;
            border: none;
            margin-left: 8px;

        }
    }
`;
export const InputSearchContainer = styled.div`
    width:100%;
    input {
    width: 100%;
    padding: 8px 16px;
    border-radius: 25px;
    border: none;
    outline: none;
    font-size: 16px;
    background: ${({ isModalOpen }) => (isModalOpen ? "rgba(0, 0, 0, 0.2)" : "#FFF")};
    color: ${({ isModalOpen }) => (isModalOpen ? "#FFF" : "#000")};
    transition: background 0.3s ease-in-out;

    &::placeholder {
      color: ${({ isModalOpen }) => (isModalOpen ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.5)")};
    }
  }
`;
