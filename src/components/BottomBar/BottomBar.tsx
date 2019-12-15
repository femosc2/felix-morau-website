import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from 'variables/colors';
import { fadeIn, fadeOut } from 'variables/animations';

interface IProps {
    activePage: string;
    nextPage: string;
    previousPage: string;
    switchTab: (tabName: string) => void;
}

const c = { ...COLORS };




export const BottomBar: React.FC<IProps> = (props: IProps) => {

  const StyledBottomBar = styled.section`
  bottom: 0;
  position: absolute;
  width: 100%;
  z-index: 10000000;
  height: 70px;
  color: ${ c.red }
`;

  const StyledNext = styled.div`
  position: absolute;
  right: 0;
  font-size: 70px;
  animation: ${props.activePage === 'contact' ? css`${fadeOut} 0.5s` : 'none'};
  opacity: 1;
  animation-fill-mode: forwards;
`;

  const StyledPrevious = styled.div`
  position: absolute;
  left: 0;
  font-size: 70px;
  animation: ${props.activePage === 'about' ? css`${fadeOut} 0.5s` : 'none'};
  animation-fill-mode: forwards;
  opacity: 1;
`;
  return (
    <StyledBottomBar>
      {<StyledNext>
        <i className='fas fa-arrow-right' onClick={() => props.switchTab(props.nextPage)}></i>
      </StyledNext>}
      {<StyledPrevious>
        <i className='fas fa-arrow-left' onClick={() => props.switchTab(props.previousPage)}></i>
      </StyledPrevious>}
      
    </StyledBottomBar>
  );
};
