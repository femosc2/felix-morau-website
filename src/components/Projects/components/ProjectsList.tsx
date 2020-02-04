import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import LoaderContainer from 'components/Loader';
import { IProject } from '../redux/reducers';

interface IProps {
  projects: IProject[];
}

export const ProjectsList: React.FC<IProps> = (props) => {
  const { projects } = props;

  const StyledProjects = styled.section`
  overflow: scroll;
  height: 100vh;
  `;

  return (
    <>
      <StyledProjects>
        {projects.length === 0 ? <LoaderContainer margin={ '25% '} /> : projects.map((p) => <Project project={ p } key={ p.name } />)}
      </StyledProjects>
    </>
  );
};
