import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';
import { StyledModal } from './ProjectFilters';

interface IProps {
  setFilterModalVisbility: (isVisible: boolean) => void;
  projectsSkills: string[];
  projectsTypes: string[];
  filteredProjectSkills: string[];
  updateSkillFilter: (skill: string) => void;
  updateTypeFilter: (type: string) => void;
  filteredProjectsTypes: string[];
}

const c = { ...COLORS };

const StyledSpan = styled.span`
color: ${c.black}  !important;
`;

export const ProjectModal: React.FC<IProps> = (props) => {
  
  return (
    <>
      <StyledModal>
        Hello
      </StyledModal>
    </>

  );
};
