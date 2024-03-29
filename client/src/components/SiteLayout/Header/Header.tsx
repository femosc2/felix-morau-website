import { Languages } from 'models/languages';
import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';
import { MARGINS } from 'variables/margins';
import { SHADOWS } from 'variables/shadows';

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
      <h1> felix morau </h1>
      <Navigation switchPage={ switchPage }/>
      <LanguagePicker switchLanguage={ switchLanguage } language={language} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{isTop: boolean, currentPage: string}>`
display: flex;
position: fixed;
z-index: 3;
width: 100%;
justify-content: space-between;
background: ${(props) =>
    (props.isTop && props.currentPage === 'about') || props.currentPage === 'about' ? 'rgba(0,0,0,0)' : COLORS.gradientPrimaryDark};
padding: 0 ${MARGINS.gutter} 0 ${MARGINS.gutter};
align-content: center;
transition: all 0.2s ease;
color: ${COLORS.white};
box-shadow: ${(props) => (props.isTop && props.currentPage === 'about') || props.currentPage === 'about' ? '0 0 0 0' : SHADOWS.headerShadow};
> h1 {
  margin-top: ${MARGINS.headerCenter};
}
`;
