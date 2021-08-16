import { keyframes } from 'styled-components';

import { COLORS } from './colors';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const fadeInBackgroundColor = keyframes`
  from {
    background-color: rgba(0,0,0,0);
  }

  to {
    background-color: ${COLORS.primary};
  }
`;

export const slideInFromRight = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;
