import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding-top:74px;
    display: flex;
    flex-direction: column;
    align-items: center;



`;
export const InputSearchContainer = styled.div`
    margin-top: 48px;
    width:100%;
  input {
    width:100%;
    background:#fff;
    border: none;
    border-radius: 25px;
    height: 50px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.04));
    outline: 0;
    padding: 0 16px;

    &::placeholder{
        color: #BCBCBC;
    }
    }
`;
