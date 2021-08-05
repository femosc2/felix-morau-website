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
  language: Languages;
  isAtTop: boolean;
}

export const Header: React.FC<IProps> = (props) => {
  const { switchPage, switchLanguage, language, isAtTop } = props;
  return (
    <StyledHeader isTop={isAtTop}>
      <h1> Felix Morau </h1>
      <Navigation switchPage={ switchPage }/>
      <LanguagePicker switchLanguage={ switchLanguage } language={language} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{isTop: boolean}>`
display: flex;
width: 100%;
justify-content: space-between;
background-color: ${(props) => props.isTop ? 'rgba(0,0,0,0)' : COLORS.primary};
padding: 0 ${MARGINS.gutter} 0 ${MARGINS.gutter};
height: 10vh;
align-content: center;
transition: 0.5s;
`;
