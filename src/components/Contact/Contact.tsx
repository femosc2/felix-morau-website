import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from 'variables/colors';
import { slideToLeft, slideToRight, Revealer } from 'variables/animations';

interface IProps {
  activePage: string;
}


export const Contact: React.FC<IProps> = (props) => {
  const c = { ...COLORS };

  const StyledSection = styled.section`
      background-color: ${c.white};
      background-size: cover;
      color: ${c.black};
      position: absolute;
      height: 100vh;
      animation: ${props.activePage !== 'contact' ? css`${slideToLeft} 1s` : css`${slideToRight} 1s`}
      animation-fill-mode: forwards;
      width: 100%;
      margin: 0;
      padding: 0;
      transition: all 1s ease-in-out;
      z-index: 100;
      @media (max-width: 768px) {
          height: 200vh;
          text-align: center;
      };
  `;

  const StyledTextSection = styled.section`
    margin: 0 auto;
    animation-fill-mode: forwards;
    width: 80%;
    margin-top: 10%;
    margin-right: 35%;
    @media (max-width: 768px) {
        margin-top: 20vh;
    };
`;
  const StyledH3 = styled.h2`
    font-size: 3rem;
    color: ${c.black};
    margin: 0 auto;
    text-align: left;
    font-weight: 100;
    padding-left: 100px;

    @media (max-width: 768px) {
      padding-left: none;
      font-size: 2rem;
    };
`;

  const StyledSpan = styled.span`
    color: ${c.red};
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: ${c.pink};
      transition: 0.2s;
    }
    `;

  return (
    <>
      <StyledSection>
        <StyledTextSection className="paragraphText">
          <Revealer boxColor={c.red}><StyledH3>send me an
            <StyledSpan> email</StyledSpan>, </StyledH3></Revealer>
          <Revealer boxColor={c.red}><StyledH3>follow my
            <StyledSpan onClick={() => window.open('https://www.twitter.com/moraufelix/', '_blank')}> ramblings</StyledSpan>,
          </StyledH3></Revealer>
          <Revealer boxColor={c.red}><StyledH3> look at a slice of
            <StyledSpan onClick={() => window.open('https://www.instagram.com/moraufelix/', '_blank')}> my life</StyledSpan>,
          </StyledH3></Revealer>
          <Revealer boxColor={c.red}><StyledH3> check out some of my
            <StyledSpan onClick={() => window.open('https://github.com/femosc2', '_blank')}> code</StyledSpan>, </StyledH3></Revealer>
          <Revealer boxColor={c.black}><StyledH3> or </StyledH3></Revealer>
          <Revealer boxColor={c.red}><StyledH3> have a look at my
            <StyledSpan onClick={() => window.open('www.linkedin.com/in/felixmorau', '_blank')}> experience</StyledSpan>.
          </StyledH3></Revealer>
        </StyledTextSection>
      </StyledSection>
    </>
  );
};
