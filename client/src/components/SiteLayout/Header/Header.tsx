import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';
import { MARGINS } from 'variables/margins';

import { Navigation } from './components/Navigation';

interface IProps {
  switchPage: (page: string) => void;
}

export const Header: React.FC<IProps> = (props) => {
  const { switchPage } = props;
  return (
    <StyledHeader>
      <h1> Felix Morau </h1>
      <Navigation switchPage={ switchPage }/>
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
