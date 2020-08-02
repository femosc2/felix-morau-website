import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';
import { IProject, IProjectModal } from '../redux/reducers';

interface IProps {
  project: IProject;
  setProjectModal: (projectModal: IProjectModal) => void;
}

const Project: React.FC<IProps> = (props) => {
  const c = { ...COLORS };
  const { project, setProjectModal } = props;

  const StyledCard = styled.div<{picture: string; text: string;}>`
  height: 33%;
  width: 33%;
  background-image: url(${(props) => props.picture});
  transition: 1s;
  font-size: 30px;
  animation-fill-mode: forwards;
  filter: grayscale(1);
  display: inline-flex;
  background-position: center;
  cursor: pointer;

  
  &:hover {
    transition: 1s;
    color: ${ c.black };
    filter: none;
  };

  @media (max-width: 768px) {
    width: 50%;
  };
  `;
  
  const StyledOverlay = styled.div`
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1),
    rgba(200, 0, 0, 0.8)
  );
  min-height: 300px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 200;
  transition: 0.2s;

  h2 {
    font-size: 16px;
    display: inline;
  }

  &:hover {
    filter: none;
    transition: 0.2s;
  }
  `;

  const StyledH3 = styled.h3`
  
  `

  return (
    <StyledCard picture={ project.image } text={ project.description } onClick={ () => setProjectModal({
      visibility: true,
      project: project,
    })}>
      <StyledOverlay>
        <StyledH3>{ project.name }</StyledH3> <br /> { project.stack.map((tech) => <h2 key={ tech }> { tech } </h2> ) }
      </StyledOverlay>
    </StyledCard>
  );
};


export default Project;
