import { Languages } from 'models/languages';
import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeIn, slideInFromRight } from 'variables/animations';
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

export const CompactHeader: React.FC<IProps> = (props) => {
  const { switchPage, switchLanguage, language } = props;
  const [isMenuShowing, setIsMenuShowing] = useState(false);
  return (
    <>
      {!isMenuShowing && <StyledHamburger onClick={() => setIsMenuShowing(true)} />}
      {isMenuShowing && <StyledOverlay onClick={() =>setIsMenuShowing(false)} />}
      {isMenuShowing && <StyledMenu>
        <StyledExitButton onClick={() => setIsMenuShowing(false)} />
        <h3>felix morau</h3>
        <Navigation switchPage={switchPage} />
        <LanguagePicker language={language} switchLanguage={switchLanguage} />
      </StyledMenu>}
    </>
  );
};

const StyledHamburger = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  border-radius: 50%;
  border: none;
  margin: ${MARGINS.gutter};
  right: 10px;
  z-index: 10;
`;

const StyledOverlay = styled.section`
width: 100vw;
height: 100vh;
position: fixed;
background-color: rgba(0,0,0,0.5);
z-index: 9;
animation: ${fadeIn} 0.5s ease forwards;
`;

const StyledMenu = styled.section`
background-color: ${COLORS.white};
position: fixed;
height: 100vh;
width: 75vw;
top: 0;
left: 0;
color: ${COLORS.primary};
z-index: 10;
> h3 {
  text-align: center;
}
box-shadow: ${SHADOWS.mobileMenuShadow};
animation: ${slideInFromRight} 0.5s ease forwards;
`;

const StyledExitButton = styled.button`
width: 25px;
height: 25px;
background-color: ${COLORS.secondary};
border-radius: 50%;
position: fixed;
border: none;
left: 65vw;
margin-top: 10px;
z-index: 10;
`;








