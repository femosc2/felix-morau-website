import { Languages } from 'models/languages';
import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';
import { MARGINS } from 'variables/margins';

import { LanguagePicker } from './components/LanguagePicker';
import { Navigation } from './components/Navigation';

interface IProps {
  switchPage: (page: string) => void;
  switchLanguage: (language: Languages) => void;
}

export const Header: React.FC<IProps> = (props) => {
  const { switchPage, switchLanguage } = props;
  return (
    <StyledHeader>
      <h1> Felix Morau </h1>
      <Navigation switchPage={ switchPage }/>
      <LanguagePicker switchLanguage={ switchLanguage } />
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
