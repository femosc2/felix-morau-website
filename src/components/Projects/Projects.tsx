import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from 'variables/colors';
import { slideToLeft, slideToRight, Revealer } from 'variables/animations';
import ProjectsListContainer from './components';

interface IProps {
  activePage: string;
}


export const Projects: React.FC<IProps> = (props) => {
  const c = { ...COLORS };

  const StyledSection = styled.section`
        background-color: ${c.white}
        background-size: cover;
        color: ${c.black};
        position: absolute;
        height: 100vh;
        animation: ${props.activePage !== 'projects' ? css`${slideToLeft} 1s` : css`${slideToRight} 1s` }
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
  float: right;
  color: red;
  width: 45%;
  margin-top: -90vh;
  margin-right: 50px;
  `;

  const StyledH2 = styled.h2`
    font-size: 5rem;
    color: ${c.red};
    margin: 0 auto;
    text-align: left;
    font-weight: 100;
  `;

  const StyledSpan = styled.span`
    color: ${c.red};
    `;
    
  const StyledP = styled.p`
    color: ${c.black};
    font-size: 2rem;
    text-align: left;
    @media (max-width: 768px) {
        text-align: center;
        width: 100%;
        max-width: 100%;
    };
    `;

  return (
    <>
      <StyledSection>
        <ProjectsListContainer />
        <StyledTextSection className="paragraphText">
          <Revealer boxColor={ c.red }><StyledH2>what do i do?</StyledH2></Revealer>
          <Revealer boxColor={ c.black }>
            <StyledP>I enjoy all types of <StyledSpan>web development</StyledSpan>! I mostly do <StyledSpan>front-end</StyledSpan> development
              with JavaScript (React and Vue) but lately I've also
              started doing more <StyledSpan>back-end</StyledSpan> with Node and .NET.</StyledP>
          </Revealer>
        </StyledTextSection>
      </StyledSection>
    </>
  );
};
