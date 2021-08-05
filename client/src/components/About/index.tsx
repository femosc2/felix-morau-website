/* eslint-disable max-len */
import { Hero } from 'components/Shared/Hero';
import { useTranslation } from 'hooks/translation';
import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';

export const AboutContainer: React.FC = () => {
  return (
    <StyledAboutContainer>
      <Hero imageUrl={'https://i.imgur.com/7At6RG9.jpg'} xPosition={'100%'} yPosition={'25%'}
      >
        <StyledAboutContent>
          <h2>{useTranslation('Hello')}</h2>
          <h2>{useTranslation('AboutContent')}</h2>
        </StyledAboutContent>
      </Hero>
    </StyledAboutContainer>
  );
};

const StyledAboutContainer = styled.section`
background-color: ${COLORS.secondary};
height: 100vh;
`;
const StyledAboutContent = styled.section`
padding-top: 5vh;
color: ${COLORS.primary};
font-size: 50px;
width: 50%;
margin: 0 auto;
margin-left: 40%;
text-align: center;
`;

