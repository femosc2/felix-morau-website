import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import LoaderContainer from 'components/Loader';
import { IProject } from '../redux/reducers';
import ProjectsFiltersContainer from './components';
import { fadeIn } from 'variables/animations';

interface IProps {
  projects: IProject[];
  search: (query: string) => void;
  projectsFilter: IProject[];
  setFilterModalVisbility: (isVisible: boolean) => void;
  isVisible: boolean;
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
  const { projects, search, projectsFilter, setFilterModalVisbility, isVisible } = props;

  const StyledProjects = styled.section`
  overflow: scroll;
  height: 100vh;
  width: 50%;

  &::-webkit-scrollbar {
    display:none;
  }
  `;

  const StyledFiltersButton = styled.div`
  z-index:9000;
  position: absolute;
  margin-top: -35vh;
  left: 85vw;
  font-size: 35px;
  transition: 0.2s;
  &:hover {
    color: red;
    transition: 0.2s;
  }
  `;

  const StyledOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0, 0.8);
  position: absolute;
  z-index: 1999999;
  margin: 0 auto;
  top: 0;
  left: 0;
  animation: ${fadeIn} 0.5s 1;
  `;
  
  return (
    <>
      {isVisible && <StyledOverlay onClick={ () => setFilterModalVisbility(false) } />}
      <StyledProjects>
        {projects.length === 0 ? <LoaderContainer margin={ '25%' } /> : projectsFilter.length === 0 &&
        projects.map((p) => <Project project={ p } key={ p.name } />)}
        {projectsFilter.length !== 0 ? projectsFilter.map((p) => <Project project={ p } key={ p.name } />) : null}
      </StyledProjects>
      <ProjectsFiltersContainer />
      <StyledFiltersButton onClick={ () => setFilterModalVisbility(true)}> Filters </StyledFiltersButton>
      <StyledInput type="text" placeholder={ 'Search here!'} onChange={ (e) => search(e.target.value)} />
    </>
  );
};
