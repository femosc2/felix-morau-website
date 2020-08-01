import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';
import { StyledModal } from './ProjectFilters';
import { IProjectModal } from '../../redux/reducers';

interface IProps {
  setProjectModal: (projectModal: IProjectModal) => void;
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
