import { Skill } from 'models/skill';
import React from 'react';
import styled from 'styled-components';

import { SkillComponent } from './components/Skill';

interface IProps {
    skills: Skill[];
}

export const Skills: React.FC<IProps> = (props) => {
  const { skills } = props;
  return (
    <StyledSkillsList>
      {skills?.map((s) => <SkillComponent key={s.name} skill={s}> </SkillComponent>)}
    </StyledSkillsList>
  );
};

const StyledSkillsList = styled.section`
z-index: 2;
overflow-x: hidden;
`;


