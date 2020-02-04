import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from 'variables/colors';
import { slideToLeft, slideToRight } from 'variables/animations';
import { IProject } from './redux/reducers';

interface IProps {
  activePage: string;
  projects: IProject[];
}


export const ProjectsList: React.FC<IProps> = (props) => {
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
  return (
    <>
      <StyledSection>
        <h1>Projects</h1>
      </StyledSection>
    </>
  );
};
