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

  const StyledBarFill = styled.div<{ width: string, color: string, text: string}>`
  height: 20px;
  padding: 50px;
  width: ${(props) => props.width};
  background-color: ${c.red};
  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.color};
    transition: 0.5s;
    height: 50px;

    &::after {
      content: '${(props) => props.text}'
    }
  }
  `;

  const StyledSkill = styled.div`
  width: 50%;
  background: ${c.transparentBlack};
  margin-top: 1%;
  text-align: left;
  min-height: 50px;
  color: white;
  `;

  const StyledSkillList = styled.div`
  overflow: scroll;
  height: 100vh;
  `;
  return (
    <>
      <StyledSection>
        <StyledSkillList>
          {skills.length === 0 ? <LoaderContainer /> :
            skills.map((skill) =>
              <StyledSkill key={ skill.name }>
                <Revealer boxColor={ c.red }>
                  <StyledBarFill color={ skill.color } width={ `${skill.comfortability  }%`} text={ skill.description }>
                    {skill.skillName}
                    <br />
                  </StyledBarFill>
                </Revealer>
              </StyledSkill>,
            )
          }
        </StyledSkillList>
      </StyledSection>
    </>
  );
};
