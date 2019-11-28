/* eslint-disable max-len */
import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ITimelineEvent } from './index';
import felix from '../../../../assets/felix.png';
import meBackground from '../../../../assets/meBackground.png';
import { COLORS } from '../../../../variables/colors';

interface IProps {
    handleClick: () => void;
    whoAmIActive: boolean;
    timelineEvents: ITimelineEvent[];
}



export const WhoAmI: React.FC<IProps> = (props: IProps) => {
  const { handleClick, whoAmIActive } = props;
  const c = { ...COLORS };

  const slideToLeft = keyframes`
        0% {
            transform: translateX(0%)
        }
        100% {
            transform: translateX(-90%) 
        }
    `;
  const slideToRight = keyframes`
        0% {
            transform: translateX(-90%)
        }
        100% {
            transform: translateX(-0%) 
        }
    `;

  const fadeOut = keyframes`
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    `;

  const fadeIn = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `;

  const StyledSection = styled.section`
        background: url(${ meBackground });
        background-size: cover;
        position: absolute;
        height: 92vh
        animation: ${whoAmIActive ? css`${slideToLeft} 1s` : css`${slideToRight} 1s`};
        animation-fill-mode: forwards;
        width: 90%;
        display: inline-flex;
        align-self: flex-start;
        margin: 0;
        padding: 0;
        transition: all 1s ease-in-out;
        z-index: 100;
        cursor: ${whoAmIActive ? 'pointer' : 'default'}
        @media (max-width: 768px) {
            height: 200vh;
            text-align: center;
        };
    `;

  const StyledTextSection = styled.section`
        position: absolute;
        right: 0%;
        animation: ${whoAmIActive ? css`${fadeOut} 1.5s` : css`${fadeIn} 0.5s`};
        animation-fill-mode: forwards;
        @media (max-width: 768px) {
            margin-top: 20vh;
            right: 23%;
        };
    `;
  const StyledVerticalSpan = styled.span`
        display: flex;
        font-size: 100px;
        margin-top: 200%;
        margin-bottom: -200%;
        animation: ${whoAmIActive ? css`${fadeIn} 0.5s` : css`${fadeOut} 0.5s`};
        transition: 1s;
        animation-fill-mode: forwards;
        color: #fff;
    `;
  const StyledSpanSection = styled.section`
        position: absolute;
        right: 0%;
    `;
  const StyledH2 = styled.h2`
        font-size: 8rem;
        color: ${ '#fff' };
        margin: 0 auto;
        @media (max-width: 768px) {
            text-align: center;
            margin-left: 35%;
        }
    `;
    
  const StyledP = styled.p`
    color: #fff;
    text-align: left;
    font-size: 3rem;
    max-width: 55vw;
    @media (max-width: 768px) {
        text-align: center;
        width: 100%;
        max-width: 100%;
        margin-left: 15%;
    };
    `;

  const StyledImg = styled.img`
    width: 35vw;
    height: 35vw;
    @media (max-width: 768px) {
        margin: 0 auto;
        };
    `;

  const sideBarIcons = [{
    name: 'fas fa-id-card',
    color: c.topBarGrey,
  }];

  return (
    <>
      <StyledSection onClick={ () => handleClick()}>
        <StyledImg src={ felix } alt=""/>
        <StyledTextSection>
          <StyledH2> Who am I? </StyledH2>
          <StyledP> Felix Morau | 24 | Malmö, Sweden </StyledP>
          <StyledP> Fullstack Web Developer @ HiQ </StyledP>
          <StyledP> CS-Student @ Malmö University </StyledP>
        </StyledTextSection>
        <StyledSpanSection>
          {sideBarIcons.map((icon) =>
            <StyledVerticalSpan key={ icon.name }> <i className={ icon.name } style={{
              color: icon.color,
            }}></i> </StyledVerticalSpan>,
          )}
        </StyledSpanSection>
      </StyledSection>
    </>
  );
};
