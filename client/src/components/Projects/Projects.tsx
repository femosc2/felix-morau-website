import { Project } from 'models/projects';
import React from 'react';
import styled from 'styled-components';

interface IProjects {
    projects: Project[];
}

export const Projects: React.FC<IProjects> = (props) => {
  const { projects } = props;
  console.log(projects);
  return (
    <StyledProjects>
      {projects.map((p) => {return (
        <p key={p.name}>{p.name}</p>
      );})}
      hej
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
z-index: 2;
`;

