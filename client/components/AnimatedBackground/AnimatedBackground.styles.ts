import { styled } from "styled-components";

export const StyledAnimatedBackground = styled.div<{currPos: number}>`
  width: 150vw;
  height: 150vh;
  position: fixed;
  margin-right: 100px;
  mouse-event: none;
  top: ${(props) => (props.currPos * -50 + 40) + "vh"};
  z-index: -1;
  filter: blur(100px);
  overflow: hidden;
  border-radius: 50%;
  transition: 1s;
`;