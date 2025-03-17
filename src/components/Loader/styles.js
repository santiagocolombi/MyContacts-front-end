import styled from "styled-components";

export const Overlay = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background: rgba(246, 245, 252, 0.7);

display: flex;
align-items: center;
justify-content: center;
/* HTML: <div class="loader"></div> */
.loader {
  --c:no-repeat linear-gradient(blue 0 0);
  background:
    var(--c),var(--c),var(--c),
    var(--c),var(--c),var(--c),
    var(--c),var(--c),var(--c);
  background-size: 16px 16px;
  animation:
    l32-1 1s infinite,
    l32-2 1s infinite;
}
@keyframes l32-1 {
  0%,100% {width:45px;height: 45px}
  35%,65% {width:65px;height: 65px}
}
@keyframes l32-2 {
  0%,40%  {background-position: 0 0,0 50%, 0 100%,50% 100%,100% 100%,100% 50%,100% 0,50% 0,  50% 50% }
  60%,100%{background-position: 0 50%, 0 100%,50% 100%,100% 100%,100% 50%,100% 0,50% 0,0 0,  50% 50% }
}
`;
