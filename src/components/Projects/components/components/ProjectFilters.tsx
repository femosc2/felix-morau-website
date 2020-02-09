import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';
import { fadeIn } from 'variables/animations';

interface IProps {
  setFilterModalVisbility: (isVisible: boolean) => void;
  projectsSkills: string[];
  filteredProjectSkills: string[];
  updateSkillFilter: (skill: string) => void;
}

export const ProjectFilters: React.FC<IProps> = (props) => {

  const { setFilterModalVisbility, projectsSkills, filteredProjectSkills, updateSkillFilter } = props;

  const c = { ...COLORS };

  // eslint-disable-next-line no-unused-vars
  const [filteredProjects, setFilteredProjects] = useState<string[]>(filteredProjectSkills);

  const refresh = (skill: string) => {
    updateSkillFilter(skill);
    setFilteredProjects([skill]);
  };

  const StyledModal = styled.div`
  position: absolute;
  top: 10%;
  height: 80vh;
  width: 60vw;
  left: 20%;
  margin: 0 auto;
  z-index: 20000000;
  background-color: ${c.white};
  box-shadow: 5px 8px 0px 5px ${c.red};
  `;

  const StyledButton = styled.button`
  z-index: 90000000;
  margin-top: 10%;
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
  
  return (
    <>
      <StyledOverlay />
      <StyledModal>
        <StyledButton onClick={ () => setFilterModalVisbility(false) }> X </StyledButton>
        <StyledH2> Tech Filter</StyledH2>
        <hr />
        <StyledList>{ projectsSkills.map((ps) =>
          <StyledLi isFilter={ filteredProjectSkills.includes(ps)}
            key={ ps }
            onClick={ () => refresh(ps)}> { ps } <StyledSpan>|</StyledSpan>
          </StyledLi> )}
        </StyledList>
        
      </StyledModal>
    </>

  );
};
