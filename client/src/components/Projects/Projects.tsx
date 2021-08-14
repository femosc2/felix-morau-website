import { Project } from 'models/projects';
import React from 'react';
import styled from 'styled-components';

import { ProjectCard } from './components/ProjectCard';

interface IProjects {
    projects: Project[];
}

export const Projects: React.FC<IProjects> = (props) => {
  const { projects } = props;
  console.log(projects);
  return (
    <StyledProjects>
      <StyledProjectsList>
        {projects.map((p) => {return (
          <ProjectCard key={p.name} project={p} />
        );})}
      </StyledProjectsList>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
display: flex;
justify-content: center;
z-index: 2;
width: 80%;
margin-left: 10%;
`;

const StyledProjectsList = styled.section`
display: flex;
flex-direction: row;
align-children: center;
justify-content: space-between;
flex-wrap: wrap;
`;


