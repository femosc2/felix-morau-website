import { useTranslation } from 'hooks/translation';
import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';
import { SHADOWS } from 'variables/shadows';

interface IProps {
  isAtTop: boolean;
  currentPage: string;
}

export const Footer: React.FC<IProps> = (props) => {
  const { isAtTop, currentPage } = props;
  return (
    <StyledFooter isTop={isAtTop} currentPage={currentPage}>
      <h3> {useTranslation('WebDeveloperDesigenr')} </h3>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer<{isTop: boolean, currentPage: string}>`
opacity: ${(props) => !props.isTop ? 0 : 1};
display: flex;
position: fixed;
width: 100%;
justify-content: center;
background: ${(props) => !props.isTop || props.currentPage === 'about' ? 'rgba(0,0,0,0)' : COLORS.gradientPrimaryDark};
padding-bottom: 5px;
height: 5vh;
align-content: center;
transition: all 0.2s ease;
color: ${COLORS.white};
bottom: 0;
z-index: 3;
box-shadow: ${(props) => props.isTop && props.currentPage === 'about' ? '0 0 0 0' : SHADOWS.footerShadow};
`;
