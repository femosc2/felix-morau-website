import { useTranslation } from 'hooks/translation';
import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';

export const ContactPage: React.FC = () => {
  return (
    <>
      <StyledContactContainer>
        <StyledBackgroundText>{useTranslation('contact')}</StyledBackgroundText>
        <StyledContactContent>
          <p>
            {useTranslation('have a look at my illustrations')} <span>&nbsp;@&nbsp;</span>
            <a target='_blank' rel='noreferrer' href={'https://www.instagram.com/moraufelix/'}>
               instagram
            </a>
          </p>
          <p>
            {useTranslation('open a pull request')} <span>&nbsp;@&nbsp;</span>
            <a target='_blank' rel='noreferrer' href={'https://www.github.com/femosc2'}>
               github
            </a>
          </p>
          <p>
            {useTranslation('follow my ramblings')} <span>&nbsp;@&nbsp;</span>
            <a target='_blank' rel='noreferrer' href={'https://www.twitter.com/moraufelix'}>
               twitter
            </a>
          </p>
          <p>
            {useTranslation('look at my professional life')} <span>&nbsp;@&nbsp;</span>
            <a target='_blank' rel='noreferrer' href={'https://www.linkedin.com/in/felixmorau/'}>
               linkedin
            </a>
          </p>
          <p>
            {useTranslation('ask me something')} <span>&nbsp;@&nbsp;</span>
            <a target='_blank' rel='noreferrer' href="mailto:felixmorau@gmail.com">
               felixmorau@gmail.com
            </a>
          </p>
          <p>
            {useTranslation('check out what movies i watch')} <span>&nbsp;@&nbsp;</span>
            <a target='_blank' rel='noreferrer' href={'https://fmovies.vercel.app/'}>
               fmovies
            </a>
          </p>
        </StyledContactContent>
      </StyledContactContainer>
    </>
  );
};


const StyledContactContainer = styled.section`
background-color: ${COLORS.white};
height: 100vh;
`;
const StyledContactContent = styled.section`
display: flex;
flex-direction: column;
padding-top: 15vh;
color: ${COLORS.primary};
text-align: center;
margin: 0 auto;
position: relative;
width: 80%;
  margin-left: 10%;
> p {
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
  > a {
    transition: 0.2s;
    color: ${COLORS.primary};
    text-decoration: underline;
    text-decoration-color: ${COLORS.secondary};
    &:hover {
      color: ${COLORS.secondary};
    }
    > span {
    }
  }
}
`;

const StyledBackgroundText = styled.h2`
color: ${COLORS.darkWhite};
position: absolute;
font-size: 300px;
text-align: center;
width: 100%;
user-select: none;
`;
