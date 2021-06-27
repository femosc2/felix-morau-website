import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';

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

export const StyledModal = styled.div`
  position: absolute;
  top: 10%;
  height: 80vh;
  width: 60vw;
  left: 20%;
  margin: 0 auto;
  z-index: 20000000;
  background-color: ${c.white};
  box-shadow: 5px 8px 0px 5px ${c.red};
  @media (max-width: 768px) {
    width: 90vw;
    height: 100%;
    left: 0;
  };
  `;

export const StyledButton = styled.button`
  z-index: 90000000;
  margin-top: 2%;
  margin-right: 2%;
  border: none;
  border-radius: 50%;
  float: right;
  font-size: 50px;
  color: ${c.black};
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    color: ${c.red};
    cursor: pointer;
  }
  `;

const StyledList = styled.ul`
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  min-height: 30%;
  overflow: scroll;
  display: inline-flex; 
  flex-wrap: wrap;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    hieght: 100%;
    left: 0;
  };
  `;

const StyledLi = styled.li<{isFilter: boolean}>`
  padding: 0;
  padding-right: 10px;
  margin: 0;
  transition: 0.5s;
  font-size: 30px;
  color: ${(props) => props.isFilter ? c.red : c.black};

  &:hover {
    color: red;
    cursor: pointer;
    transition: 0.5s;
  }
  `;

const StyledH2 = styled.h2`
    font-size: 5rem;
    color: ${c.red};
    margin: 0 auto;
    text-align: left;
    font-weight: 100;
  `;

const StyledSpan = styled.span`
    color: ${c.black}  !important;
  `;

export const ProjectFilters: React.FC<IProps> = (props) => {

  const { setFilterModalVisbility, projectsSkills,
    filteredProjectSkills, updateSkillFilter, projectsTypes,
    filteredProjectsTypes, updateTypeFilter } = props;

  // eslint-disable-next-line no-unused-vars
  const [filteredProjects, setFilteredProjects] = useState<string[]>(filteredProjectSkills);

  // method for rerendering the component on prop change
  const refreshSkills = (skill: string) => {
    updateSkillFilter(skill);
    setFilteredProjects([skill]);
  };

  const refreshTypes = (type: string) => {
    updateTypeFilter(type);
    setFilteredProjects([type]);
  };
  
  return (
    <>
      <StyledModal>
        <StyledButton onClick={ () => setFilterModalVisbility(false) }> <i className='far fa-times-circle'></i> </StyledButton>
        <StyledH2> Tech Filter</StyledH2>
        <hr />
        <StyledList>{ projectsSkills.sort().map((ps) =>
          <StyledLi isFilter={ filteredProjectSkills.includes(ps)}
            key={ ps }
            onClick={ () => refreshSkills(ps)}> { ps } <StyledSpan>|</StyledSpan>
          </StyledLi> )}
        </StyledList>
        <StyledH2>Type Filter</StyledH2>
        <hr />
        <StyledList>{ projectsTypes.map((pt) =>
          <StyledLi isFilter={ filteredProjectsTypes.includes(pt)}
            key={ pt }
            onClick={ () => refreshTypes(pt)}> { pt.charAt(0).toUpperCase() + pt.substring(1) } <StyledSpan>|</StyledSpan>
          </StyledLi> )}
        </StyledList>
        
      </StyledModal>
    </>

  );
};
