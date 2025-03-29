import styled, { keyframes } from "styled-components";

// Definindo as animações com keyframes
const l32_1 = keyframes`
  0%, 100% {
    width: 45px;
    height: 45px;
  }
  35%, 65% {
    width: 65px;
    height: 65px;
  }
`;

const l32_2 = keyframes`
  0%, 40% {
    background-position: 0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0, 50% 50%;
  }
  60%, 100% {
    background-position: 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0, 0 0, 50% 50%;
  }
`;
export const StyledSpinner = styled.div`
    width: ${({widith}) => `${widith}px`};
    height: ${({height}) => `${height}px`};
    --c:no-repeat linear-gradient(blue 0 0);
    background:
    var(--c),var(--c),var(--c),
    var(--c),var(--c),var(--c),
    var(--c),var(--c),var(--c);
  background-size: 4px 4px;
  animation:
    l32-1 1s infinite,
    l32-2 1s infinite;
}
@keyframes l32-1 {
  0%,100% {width:20px;height: 20px}  //tamanho do quadrado
  35%,65% {width:15px;height: 15px}

}

@keyframes l32-2 {
  0%,40%  {background-position: 0 0,0 50%, 0 100%,50% 100%,100% 100%,100% 50%,100% 0,50% 0,  50% 50% }
  60%,100%{background-position: 0 50%, 0 100%,50% 100%,100% 100%,100% 50%,100% 0,50% 0,0 0,  50% 50% }

`;
