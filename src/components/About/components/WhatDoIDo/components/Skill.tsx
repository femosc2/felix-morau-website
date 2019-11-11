import React from 'react';
import { ISkill } from '../index';
import styled from 'styled-components';

interface IProps {
    skill: ISkill;
}

export const Skill: React.FC<IProps> = (props: IProps) => {
  const { skill } = props;
  const { skillName, comfortability, color } = skill;

  const StyledBar = styled.div`
    width: 30vw;
    background-color: rgba(0,0,0,0.5);
    border-radius: 15px;
    `;
  const StyledFill = styled.div`
    width: ${ comfortability }%;
    background-color: ${ color };
    text-align: center;
    z-index: 500;
    color: ${ color };
    border-radius: 15px;
    `;
  const StyledDiv = styled.div`
    text-align: center;
    color: white;
    width: 100%;
    `;
  const StyledP = styled.p`
    text-align: center;
    width: inherit;
    `;

  return(
    <StyledDiv>
      <StyledP> {skillName }</StyledP>
      <StyledBar>
        <StyledFill> s </StyledFill>
      </StyledBar>
    </StyledDiv>
  );
};
