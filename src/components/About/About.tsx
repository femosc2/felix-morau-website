/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';
import Particles from 'react-particles-js';
import { Revealer } from 'variables/animations';

export const About: React.FC = () => {
  const c = { ...COLORS };

  const StyledSection = styled.section`
        background-color: ${c.white}
        background-size: cover;
        color: ${c.black};
        position: absolute;
        height: 100vh
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
        width: 60%;
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
        margin-bottom: -50px;
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
    @media (max-width: 768px) {
        text-align: center;
        width: 100%;
        max-width: 100%;
    };
    `;

  return (
    <>
      <StyledSection>
        <Particles
          params={{
            'particles': {
              'number': {
                'value': 100,
                'density': {
                  'enable': true,
                  'value_area': 1500,
                },
              },
              'color': {
                'value': c.red,
              },
              'line_linked': {
                'enable': false,
                'opacity': 0.5,
                'color': c.red,
              },
              'move': {
                'speed': 0.8,
              },
              'size': {
                'value': 0,
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
        <StyledTextSection className="paragraphText">
          <Revealer boxColor={c.red}><StyledH2> hello </StyledH2></Revealer>
          <StyledP>
            <Revealer boxColor={c.black}>
              My name is <StyledSpan>Felix Morau</StyledSpan>, a Fullstack Web Developer based in Malmö, Sweden.
            </Revealer>
          </StyledP>
        </StyledTextSection>
      </StyledSection>
    </>
  );
};
