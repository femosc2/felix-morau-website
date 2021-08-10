/* eslint-disable max-len */
import { Hero } from 'components/Shared/Hero';
import { useTranslation } from 'hooks/translation';
import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';

export const AboutContainer: React.FC = () => {
  return (
    <StyledAboutContainer>
      <Hero imageUrl={'https://i.imgur.com/DbIizm6.jpg'} xPosition={'65%'} yPosition={'55%'}
      >
        <StyledAboutContent>
          <h2>{useTranslation('Hello')}</h2>
          <p>{useTranslation('AboutContent')}</p>
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
color: ${COLORS.white};
> h2 {
  color: ${COLORS.primary};
  font-size: 72px;
  margin-top: 20%;
}
> p {
  font-size: 40px;
}
width: 50%;
text-align: center;
margin: 0 auto;
`;

