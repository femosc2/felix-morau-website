import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';
import { StyledModal, StyledButton } from './ProjectFilters';
import { IProjectModal } from '../../redux/reducers';

interface IProps {
  setProjectModal: (projectModal: IProjectModal) => void;
  projectModal: IProjectModal;
}

const c = { ...COLORS };

const StyledBuiltWith = styled.p`
font-family: 'Playfair Display', serif;
font-style: italic;
font-weight: 0;

`;

const StyledH3 = styled.h3`
font-family: 'Playfair Display', serif;
`;

const StyledH2 = styled.h3`
font-family: 'Playfair Display', serif;
color: ${c.red};
font-size: 5rem;
text-align: center;
margin: 0 auto;
width: 100%;
transition: 0.5s;

&:hover {
  color: ${c.pink};
  transition: 0.2s;
  cursor: pointer;
}
`;

const StyledLi = styled.li`
padding: -0;
margin: -10px;
text-align: center;
font-family: 'Playfair Display', serif;
`;

const StyledUl = styled.ul`
padding: 0;
margin: 0;
text-align: center;
margin-top: -20px;
`;

export const ProjectModal: React.FC<IProps> = (props) => {
  const { projectModal, setProjectModal } = props;
  
  return (
    <>
      { projectModal.project !== undefined && <StyledModal>
        <StyledButton onClick={ () => setProjectModal({
          project: undefined,
          visibility: false,
        }) }> <i className='far fa-times-circle'></i> </StyledButton>
        <StyledH2 onClick={ () => window.open(projectModal.project!.link, '_blank')}> { projectModal.project.name } </StyledH2>
        <p> a { projectModal.project.type } project by Felix Morau </p>
        <StyledH3>{ projectModal.project.description }</StyledH3>
        <StyledBuiltWith> built with </StyledBuiltWith>
        <StyledUl>
          { projectModal.project.stack.map((s) => <StyledLi key={ s }> <h4>{ s }</h4> </StyledLi>)}
        </StyledUl>
      </StyledModal>
      }
    </>

  );
};
