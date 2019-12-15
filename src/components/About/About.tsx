/* eslint-disable max-len */
import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from 'variables/colors';
import Particles from 'react-particles-js';
import { Revealer, slideToLeft, slideToRight } from 'variables/animations';

interface IProps {
  activePage: string,
}

export const About: React.FC<IProps> = (props) => {
  const c = { ...COLORS };

  const StyledSection = styled.section`
        background-color: ${c.white}
        background-size: cover;
        color: ${c.black};
        position: absolute;
        height: 99vh;
        animation: ${props.activePage !== 'about' ? css`${slideToLeft} 1s` : css`${slideToRight} 1s` }
        animation-fill-mode: forwards;
        width: '100%';
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
        width: 60%;
        margin-top: 10%;
        margin-right: 35%;
        @media (max-width: 768px) {
            margin-top: 20vh;
        };
    `;
  const StyledH2 = styled.h2`
        font-size: 8rem;
        color: ${c.red};
        margin: 0 auto;
        text-align: left;
        font-weight: 100;
        @media (max-width: 768px) {
            text-align: center;
        }
    `;

  const StyledSpan = styled.span`
  color: ${c.red};
  `;
    
  const StyledP = styled.p`
    color: ${c.black};
    font-size: 4rem;
    text-align: left;
    margin-top: -50px;
    @media (max-width: 768px) {
        text-align: center;
        width: 100%;
        max-width: 100%;
    };
    `;

  return (
    <StyledSection>
      <Particles className="aboutParticles"
        params={{
          'particles': {
            'number': {
              'value': 300,
              'density': {
                'enable': true,
                'value_area': 1500,
              },
            },
            'color': {
              'value': c.red,
            },
            'line_linked': {
              'enable': true,
              'opacity': 0.25,
              'color': c.red,
                
            },
            'move': {
              'speed': 2,
            },
            'size': {
              'value': 2,
            },
            'opacity': {
              'anim': {
                'enable': false,
                'speed': 20,
                'opacity_min': 0.05,
              },
            },
          },
          'interactivity': {
            'events': {
              'onhover': {
                'enable': true,
                'mode': 'grab',
              },
              'onclick': {
                'enable': true,
                'mode': 'repulse',
              },
              'resize': true,
            },
            'modes': {
              'repulse': {
                'distance': 50,
                'duration': 0.25,
              },
            },
          },
          'retina_detect': true,
        }} />
      <StyledTextSection className="paragraphText">
        <Revealer boxColor={c.red}><StyledH2> hello </StyledH2></Revealer>
        <StyledP>
          <Revealer boxColor={c.black}>
              My name is <StyledSpan>Felix Morau</StyledSpan>, a Fullstack Web Developer based in Malmö, Sweden.
          </Revealer>
        </StyledP>
      </StyledTextSection>
    </StyledSection>
  );
};
