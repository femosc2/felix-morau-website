import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from 'variables/colors';
import { slideToLeft, slideToRight } from 'variables/animations';
import LoaderContainer from '../Loader';
import { Revealer } from '../../variables/animations';

interface IProps {
  activePage: string;
  skills: any[];
}


export const Skills: React.FC<IProps> = (props) => {
  const c = { ...COLORS };
  const { skills } = props;

  skills.map((skill) => {
    console.log(skill);
  });
  
  const StyledSection = styled.section`
        background-color: ${c.white};
        background-size: cover;
        color: ${c.black};
        position: absolute;
        height: 100vh;
        animation: ${props.activePage !== 'skills' ? css`${slideToLeft} 1s` : css`${slideToRight} 1s` }
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

  const StyledBarFill = styled.div<{ width: string, color: string}>`
  height: 20px;
  padding: 50px;
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
  `;

  const StyledSkill = styled.div`
  width: 50%;
  background: ${c.transparentRed};
  margin-top: 1%;
  margin-bottom: 1%;
  text-align: left;
  `;

  const StyledSkillList = styled.div`
  overflow: scroll;
  height: 2000px;
  `;
  return (
    <>
      <StyledSection>
        <StyledSkillList>
          {skills.length === 0 ? <LoaderContainer /> :
            skills.map((skill) =>
              <Revealer key={ skill.name } boxColor={ skill.color }>
                <StyledSkill><StyledBarFill color={ skill.color } width={ `${skill.comfortability  }%` }>
                  {skill.skillName}
                </StyledBarFill>
                </StyledSkill>
              </Revealer>,
            )
          }
        </StyledSkillList>
      </StyledSection>
    </>
  );
};
