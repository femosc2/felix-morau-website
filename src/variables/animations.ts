import styled, { keyframes, css } from 'styled-components';

export const slideToLeft = keyframes`
        0% {
            transform: translateX(0%)
        }
        100% {
            transform: translateX(-100%) 
        }
    `;
export const slideToRight = keyframes`
        0% {
            transform: translateX(-100%)
        }
        100% {
            transform: translateX(-0%) 
        }
    `;

export  const fadeOut = keyframes`
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    `;

export const fadeIn = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `;

export const secondaryImageOverlayIn = keyframes`
      0% {
        width: 0;
      }
      100% {
        width: 100%;
      }
    `;

export const secondaryImageOverlayOut = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  `;
export const Revealer = styled.div<{ boxColor: string}>`
  position: relative;
  overflow: hidden;

  &:after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.boxColor};
    transform: translateX(-100%);
    animation: ${css`${secondaryImageOverlayIn} 0.6s 0s`}, ${css`${secondaryImageOverlayOut} 0.6s 0.6s`};
    animation-fill-mode: both;
  }
`;

