/* eslint-disable max-len */
import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ISkill } from './index';
import { Skill } from './components/Skill';
import background from 'assets/background.png';
import { COLORS } from 'variables/colors';


interface IProps {
    handleClick: () => void;
    whoAmIActive: boolean;
    skills: ISkill[];
}

export const WhatDoIDo: React.FC<IProps> = (props: IProps) => {
  const { handleClick, whoAmIActive, skills } = props;
  const c = { ...COLORS };

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
        background: url(${background});
        background-size: cover;
        height: 92vh
        width: 100%;
        display: inline-flex;
        align-self: flex-start;
        margin: 0;
        padding: 0;
        z-index: -10;
        transition: transform 1s ease-in-out;
        overflow: hidden;
        cursor: ${whoAmIActive ? 'default' : 'pointer'};
        @media (max-width: 768px) {
            height: 200vh;
        };
    `;
    
  const StyledList = styled.ul`
        margin-left: 65%;
        overflow-y: scroll;
        overflow-x: hidden;
        height: 84vh;
        padding-right: 100vw;
        animation: ${whoAmIActive ? css`${fadeIn} 1.5s` : css`${fadeOut} 0.5s`};
        animation-fill-mode: forwards;
        opacity:0
        margin-top: 4%;
        margin-bottom: 5%;
    `;
  const StyledSpanSection = styled.section`
        position: absolute;
        right: 2.5%;
    `;
  const StyledTextSection = styled.section`
    position: absolute;
    left: 10%;
    animation: ${whoAmIActive ? css`${fadeIn} 0.5s` : css`${fadeOut} 0.5s`};
        animation-fill-mode: forwards;
        opacity: 0;
    `;
  const StyledVerticalSpan = styled.span`
        display: flex;
        font-size: 4rem;
        margin-top: 50%;
        margin-bottom: 50%;
        transition: 1s;
        animation-fill-mode: forwards;
        animation: ${whoAmIActive ? css`${fadeOut} 0.5s` : css`${fadeIn} 0.5s`};
        animation-fill-mode: forwards;
        opacity: 0;
        color: #fff;
    `;
  const StyledH2 = styled.h2`
        font-size: 8vw;
        color: #fff;
        margin: 0;
    `;
  const StyledH3 = styled.h3`
        font-size: 3vw;
        margin: 0;
        right: 5%;
        position: absolute;
        color: #fff;
        animation: ${whoAmIActive ? css`${fadeIn} 0.5s` : css`${fadeOut} 0.5s`};
        animation-fill-mode: forwards;
        opacity: 0;
    `;

  const StyledP = styled.p`
    color: #fff;
    text-align: left;
    font-size: 1.2rem;
    max-width: 55vw;
    `;

  const sideBarIcons = [
    {
      name: 'fab fa-js',
      color: c.darkPurple,
    },
    {
      name: 'fab fa-react',
      color: c.lightPurple,
    },
    {
      name: 'fab fa-vuejs',
      color: c.lavender,
    },
    {
      name: 'fab fa-node',
      color: c.neonBlue,
    },
    {
      name: 'fas fa-hashtag',
      color: c.pink,
    },
  ];

  return (
    <>
    <StyledSection onClick={ () => handleClick()}>
      <StyledTextSection>
        <StyledH2> What do I do? </StyledH2>
        <StyledP>
          I'm a problem solver who enjoys simplyfing life through technology, design and creativity. Wether it is through programming or UX-design
          I produce intuative, fun-to-use, functional and professional solutions to peoples problems.
        </StyledP>
        <StyledP>
          I'm a front-end focused fullstack developer meaning that while I enjoy building the occasional backend most of my attention is focused at the front-end.
          JavaScript and TypeScript are my tools of choice when it comes to tackling problems and I enjoy honing my skills through personal projects, university projects and work projects.
        </StyledP>
      </StyledTextSection>
      <StyledH3> How do I do it? </StyledH3>
      { skills.length !== 1 && <StyledList>
        {skills.map((skill) => <Skill key={ skill.skillName } skill={ skill } />) }
      </StyledList>}
      <StyledSpanSection>
        { sideBarIcons.map((icon) =>
          <StyledVerticalSpan key={ icon.name}> <i className={ icon.name} style={{
            color: icon.color,
          }}
          ></i> </StyledVerticalSpan>,
        )}
        <p>
        </p>
      </StyledSpanSection>
    </StyledSection>
    </>
  );
};
