import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import LoaderContainer from 'components/Loader';
import { IProject, IProjectModal } from '../redux/reducers';
import ProjectsFiltersContainer from './components';
import { COLORS } from 'variables/colors';

interface IProps {
  projects: IProject[];
  search: (query: string) => void;
  projectsFilter: IProject[];
  setFilterModalVisbility: (isVisible: boolean) => void;
  filtersVisibility: boolean;
  setUpdate: (update: string) => void;
  skillFilter: string[];
  typesFilter: string[];
  setProjectModal: (projexctModal: IProjectModal) => void;
  projectModal: IProjectModal;
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
  font-family: 'Playfair Display', serif;
  font-style: italic;
  color: #ff0000;

  &::placeholder {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: -120vh;
    left: 0;
  };
  `;

const c = { ...COLORS };

const StyledProjects = styled.section`
  overflow: scroll;
  height: 100vh;
  width: 50%;

  &::-webkit-scrollbar {
    display:none;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 120vh;
    
  };
  `;

const StyledFiltersButton = styled.div`
  z-index:9000;
  position: absolute;
  margin-top: -20vh;
  left: 52vw;
  border: 1px solid ${c.red};
  font-size: 35px;
  transition: 0.2s;
  box-shadow: 2px 4px 0px 2px ${c.red};

  
  &:hover {
    color: red;
    transition: 0.2s;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: -110vh;
    left: 0;
    display: none;
  };
  `;

export const StyledOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0, 0.8);
  position: absolute;
  z-index: 1999999;
  margin: 0 auto;
  top: 0;
  left: 0;
  `;

const StyledNoProjects = styled.section`
  color: ${c.red};
  `;

const StyledP = styled.p`
    color: ${c.black};
    font-size: 4rem;
    text-align: left;
    margin-top: -50px;
    @media (max-width: 768px) {
        text-align: center;
        width: 100%;
        max-width: 100%;
  `;

const StyledH2 = styled.h2`
        font-size: 8rem;
        color: ${c.red};
        margin: 0 auto;
        text-align: left;
        font-weight: 100;
        padding-bottom: 20px;
        font-family: 'Playfair Display', serif;
        @media (max-width: 768px) {
            text-align: center;
        }
    `;
export const ProjectsList: React.FC<IProps> = (props) => {
  const { projects, search, projectsFilter, setFilterModalVisbility, filtersVisibility, setUpdate, skillFilter, typesFilter, setProjectModal, projectModal } = props;

  const closeModal = () => {
    setFilterModalVisbility(false);
    setProjectModal({
      project: undefined,
      visibility: false,
    });
  };

  return (
    <>
      {filtersVisibility || projectModal.visibility && <StyledOverlay onClick={ () => closeModal() } />}
      <StyledProjects>
        {projects.length === 0 ? <LoaderContainer margin={ '25%' } />
          : (projectsFilter.length === 0 && (skillFilter.length === 0 || typesFilter.length === 0) ) &&
        projects.map((p) => <Project setProjectModal={ setProjectModal } project={ p } key={ p.name } />)}
        {(projectsFilter.length !== 0 && projects.length !== 0) ? projectsFilter.map((p) => <Project setProjectModal={ setProjectModal }project={ p } key={ p.name } />) :
          (projectsFilter.length !== 0 && projects.length === 0) && <StyledNoProjects>
            <StyledH2>Try again!</StyledH2>
            <StyledP className="paragraphText">
              No projects with these filters found!
            </StyledP>
          </StyledNoProjects>}
      </StyledProjects>
      <ProjectsFiltersContainer setUpdate={ setUpdate } />
      <StyledFiltersButton onClick={ () => setFilterModalVisbility(true)}> Filters </StyledFiltersButton>
      <StyledInput type="text" placeholder={ 'Search for titles or parts of a description eg "felixmorau.se"'}
        onChange={ (e) => search(e.target.value)} />
    </>
  );
};
