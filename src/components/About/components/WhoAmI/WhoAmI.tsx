/* eslint-disable max-len */
import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { COLORS } from 'variables/colors';
import Particles from 'react-particles-js';

interface IProps {
    handleClick: () => void;
    whoAmIActive: boolean;
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
        background-color: ${c.darkPurple}
        background-size: cover;
        color: ${c.pink};
        position: absolute;
        height: 100vh
        animation: ${whoAmIActive ? css`${slideToLeft} 1s` : css`${slideToRight} 1s`};
        animation-fill-mode: forwards;
        width: 100%;
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
        margin: 0 auto;
        animation: ${whoAmIActive ? css`${fadeOut} 1.5s` : css`${fadeIn} 0.5s`};
        animation-fill-mode: forwards;
        width: 60%;
        margin-right: 35%;
        @media (max-width: 768px) {
            margin-top: 20vh;
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
        color: ${c.pink};
    `;
  const StyledSpanSection = styled.section`
        position: absolute;
        right: 0%;
    `;
  const StyledH2 = styled.h2`
        font-size: 8rem;
        color: ${c.pink};
        margin: 0 auto;
        margin-bottom: -50px;
        @media (max-width: 768px) {
            text-align: center;
        }
    `;
    
  const StyledP = styled.p`
    color: ${c.pink};
    font-size: 4rem;
    text-align: left;
    @media (max-width: 768px) {
        text-align: center;
        width: 100%;
        max-width: 100%;
    };
    `;
    
  const sideBarIcons = [{
    name: 'fas fa-id-card',
    color: c.topBarGrey,
  }];

  return (
    <>
      <StyledSection onClick={ () => handleClick()}>
        <Particles
          params={{
            'particles': {
              'number': {
                'value': 1200,
                'density': {
                  'enable': true,
                  'value_area': 1500,
                },
              },
              'color': {
                'value': c.neonBlue,
              },
              'line_linked': {
                'enable': false,
                'opacity': 0.1,
                'color': c.neonBlue,
              },
              'move': {
                'speed': 0.8,
              },
              'size': {
                'value': 1,
              },
              'opacity': {
                'anim': {
                  'enable': true,
                  'speed': 1.5,
                  'opacity_min': 0.05,
                },
              },
            },
            'interactivity': {
              'events': {
                'onhover': {
                  'enable': false,
                  'mode': 'repulse',
                },
                'resize': true,
              },
              'modes': {
              },
            },
            'retina_detect': true,
          }} />
        <StyledTextSection>
          <StyledH2> hello </StyledH2>
          <StyledP> My name is Felix Morau, a Fullstack Web Developer based in Malmö, Sweden </StyledP>
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
