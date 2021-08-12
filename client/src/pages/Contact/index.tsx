import { useTranslation } from 'hooks/translation';
import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';

export const ContactPage: React.FC = () => {
  return (
    <>
      <StyledContactContainer>
        <StyledContactContent>
          <h3>
            {useTranslation('have a look at my illustrations')} <span>&nbsp;@&nbsp;</span>
            <a target='_blank' rel='noreferrer' href={'https://www.instagram.com/moraufelix/'}>
               instagram
            </a>
          </h3>
          <h3>
            {useTranslation('open a pull request')} <span>&nbsp;@&nbsp;</span>
            <a target='_blank' rel='noreferrer' href={'https://www.github.com/femosc2'}>
               github
            </a>
          </h3>
          <h3>
            {useTranslation('follow my ramblings')} <span>&nbsp;@&nbsp;</span>
            <a target='_blank' rel='noreferrer' href={'https://www.twitter.com/moraufelix'}>
               twitter
            </a>
          </h3>
          <h3>
            {useTranslation('look at my professional life')} <span>&nbsp;@&nbsp;</span>
            <a target='_blank' rel='noreferrer' href={'https://www.linkedin.com/in/felixmorau/'}>
               linkedin
            </a>
          </h3>
          <h3>
            {useTranslation('ask me something')} <span>&nbsp;@&nbsp;</span>
            <a target='_blank' rel='noreferrer' href="mailto:felixmorau@gmail.com">
               felixmorau@gmail.com
            </a>
          </h3>
          <h3>
            {useTranslation('check out what movies i watch')} <span>&nbsp;@&nbsp;</span>
            <a target='_blank' rel='noreferrer' href={'https://fmovies.vercel.app/'}>
               fmovies
            </a>
          </h3>
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
> h3 {
  display: flex;
  justify-content: center;
  font-size: 30px;
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
