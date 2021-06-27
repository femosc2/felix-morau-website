import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';
import { MARGINS } from 'variables/margins';

import { Navigation } from './components/Navigation';

interface IProps {
  switchTab: (tab: string) => void;
}

export const Header: React.FC<IProps> = (props) => {
  const { switchTab } = props;
  return (
    <StyledHeader>
      <h1> Felix Morau </h1>
      <Navigation switchTab={ switchTab }/>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
background-color: ${COLORS.primary};
padding: 0 ${MARGINS.gutter} 0 ${MARGINS.gutter};
height: 10vh;
align-content: center;
`;
