import React, { useState } from 'react';
import styled from 'styled-components';
import Project from './Project';
import LoaderContainer from 'components/Loader';
import { IProject } from '../redux/reducers';

interface IProps {
  projects: IProject[];
  search: (query: string) => void;
  projectsFilter: IProject[];
}


const StyledInput = styled.input`
  z-index:9000;
  position: absolute;
  margin-top: -30vh;
  left: 52vw;
  font-size: 50px;
  border: none;
  border-bottom: 1px solid black;
  background: rgba(255, 255, 255, 0);
  `;
export const ProjectsList: React.FC<IProps> = (props) => {
  const { projects, search, projectsFilter } = props;

  const [ query, setQuery] = useState<string>('');

  const StyledProjects = styled.section`
  overflow: scroll;
  height: 100vh;
  width: 50%;

  &::-webkit-scrollbar {
    display:none;
  }
  `;

  const StyledButton = styled.div`
  z-index:9000;
  position: absolute;
  margin-top: -30vh;
  left: 85vw;
  font-size: 50px;
  transition: 0.5s;
  &:hover {
    color: red;
    transition: 0.5s;
  }
  `;
  return (
    <>
      <StyledProjects>
        {projects.length === 0 ? <LoaderContainer margin={ '25%' } /> : projectsFilter.length === 0 && projects.map((p) => <Project project={ p } key={ p.name } />)}
        {projectsFilter.length !== 0 ? projectsFilter.map((p) => <Project project={ p } key={ p.name } />) : null}
      </StyledProjects>
      <StyledButton onClick={ () => search(query)}> Search </StyledButton>
      <StyledInput type="text" placeholder={ 'Search here!'} onChange={ e => setQuery(e.target.value)} value={ query } />
      
    </>
  );
};
