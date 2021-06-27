import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from 'variables/colors';
import { slideToLeft, slideToRight } from 'variables/animations';
import { Revealer } from 'variables/animations';
import SkillsListContainer from './components';

interface IProps {
  activePage: string;
}


export const Skills: React.FC<IProps> = (props) => {
  const c = { ...COLORS };

  const StyledSection = styled.section`
        background-color: ${c.white};
        background-size: cover;
        color: ${c.black};
        position: absolute;
        min-height: 100vh;
        animation: ${props.activePage !== 'skills' ? css`${slideToLeft} 1s` : css`${slideToRight} 1s` }
        animation-fill-mode: forwards;
        width: 100%;
        margin: 0;
        padding: 0;
        transition: all 1s ease-in-out;
        z-index: 100;
        @media (max-width: 768px) {
            min-height: 100vh;
            text-align: center;
        };
    `;

  const StyledTextSection = styled.section`
  color: ${c.red};
  width: 45%;
  margin-top: -90vh;
  margin-right: 50px;
  float: right;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: -290vh;
    top: 0;
    float: none;
  };
  `;

  const StyledH2 = styled.h2`
    font-size: 5rem;
    color: ${c.red};
    margin: 0 auto;
    font-weight: 100;
    text-align: left;
    @media (max-width: 768px) {
      font-size: 3rem;
      text-align: center;
    };
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
    <StyledSection>
      <SkillsListContainer />
      <StyledTextSection className="paragraphText">
        <Revealer boxColor={ c.red }><StyledH2>what can i do?</StyledH2></Revealer>
        <Revealer boxColor={ c.black }>
          <StyledP>I'm a <StyledSpan>Frontend Web Developer </StyledSpan>
            at Avensia. I learned programming through the <StyledSpan>
            Information Architecture </StyledSpan> programme at Malmö University where I
            attained my bachelors degree in <StyledSpan> Computer and Information Science</StyledSpan>.
            This means that in addition to my programming skills I also have a good grasp on <StyledSpan>UX-Design </StyledSpan>
            and some proficiency in <StyledSpan>graphic design</StyledSpan>.</StyledP>
        </Revealer>
      </StyledTextSection>
    </StyledSection>
  );
};
