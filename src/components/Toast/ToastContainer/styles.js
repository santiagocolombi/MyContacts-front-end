import styled from "styled-components";

export const Container = styled.div`
position: fixed;
bottom: 48px;
left: 50%;
transform: translateX(-50%);
z-index: 9999; /* Garante que fique acima dos outros elementos */
`;
