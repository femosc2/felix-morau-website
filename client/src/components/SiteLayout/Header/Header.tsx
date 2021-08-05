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
  currentPage: string;
}

export const Header: React.FC<IProps> = (props) => {
  const { switchPage, switchLanguage, language, isAtTop, currentPage } = props;
  return (
    <StyledHeader isTop={isAtTop} currentPage={currentPage}>
      <h1> Felix Morau </h1>
      <Navigation switchPage={ switchPage }/>
      <LanguagePicker switchLanguage={ switchLanguage } language={language} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{isTop: boolean, currentPage: string}>`
display: flex;
position: fixed;
width: 100%;
justify-content: space-between;
background-color: ${(props) => props.isTop && props.currentPage === 'about' ? 'rgba(0,0,0,0)' : COLORS.secondary};
padding: 0 ${MARGINS.gutter} 0 ${MARGINS.gutter};
height: 10vh;
align-content: center;
transition: 0.5s;
color: ${COLORS.white}
`;
