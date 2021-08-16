import { Hero } from 'components/Shared/Hero';
import { useIsCompact } from 'hooks/isCompact';
import { useTranslation } from 'hooks/translation';
import React from 'react';
import styled from 'styled-components';
import { fadeIn } from 'variables/animations';
import { COLORS } from 'variables/colors';
import { MARGINS } from 'variables/margins';

export const AboutPage: React.FC = () => {
  const isCompact = useIsCompact();
  return (
    <StyledAboutContainer>
      <Hero imageUrl={'https://i.imgur.com/DNa9jSJ.jpg'} xPosition={'65%'} yPosition={'55%'}
      >
        <StyledAboutContent isCompact={isCompact}>
          <h2>{useTranslation('Hello')}</h2>
          <p>{useTranslation('AboutContent')}</p>
        </StyledAboutContent>
      </Hero>
    </StyledAboutContainer>
  );
};

const StyledAboutContainer = styled.section`
background-color: ${COLORS.white};
margin: 0;
padding: 0;
height: 100vh;
animation: ${fadeIn} 0.25s ease 1 forwards;
`;

const StyledAboutContent = styled.section<{isCompact: boolean}>`
padding-top: 5vh;
color: ${COLORS.white};
> h2 {
  font-size: 72px;
  margin-top: 20%;
}
> p {
  font-size: 40px;
  margin: ${(props) => props.isCompact ? MARGINS.gutter : '0px'};
}
width: ${(props) => props.isCompact ? '100%' : '50%'};
text-align: center;
margin: 0 auto;
`;

