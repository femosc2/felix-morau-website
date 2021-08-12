import { useTranslation } from 'hooks/translation';
import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';

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

const StyledFooter = styled.header<{isTop: boolean, currentPage: string}>`
display: flex;
position: fixed;
width: 100%;
justify-content: center;
background-color: ${(props) => props.isTop && props.currentPage === 'about' ? 'rgba(0,0,0,0)' : COLORS.primary};
padding-bottom: 5px;
height: 5vh;
align-content: center;
transition: background-color 0.2s ease;
color: ${COLORS.white};
bottom: 0;
`;
