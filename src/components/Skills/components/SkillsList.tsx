import React from 'react';
import styled from 'styled-components';
import { ISkill } from '../redux/reducers';
import LoaderContainer from 'components/Loader';
import Skill from './Skill';
import { COLORS } from 'variables/colors';

interface IProps {
  skills: ISkill[];
  sbComfortability: (skills: ISkill[]) => void;
  sbName: (skills: ISkill[]) => void;
  sortedBy: string;
}

const SkillsList: React.FC<IProps> = (props) => {
  const { skills, sbComfortability, sbName, sortedBy } = props;
  const { red, black } = COLORS;

  const StyledSkillList = styled.section`
  overflow: scroll;
  height: 100vh;
  @media (max-width: 768px) {
    height: 200vh;
    margin-top: 100vh;
  };
  `;

  const StyledButtonComfort = styled.div<{ sortedBy: string }>`
  z-index:9001;
  margin-top: -95vh;
  color: ${black};
  font-size: 50px;
  left: 52vw;
  position: absolute;
  transition: 0.5s;
  color: ${sortedBy === 'comfortability' ? red : black };
  &:hover {
    color: ${ red };
    transition: 0.5s;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: none;
  };
  `;

  const StyledButtonName = styled.div<{ sortedBy: string }>`
  z-index:9000;
  position: absolute;
  margin-top: -95vh;
  left: 57vw;
  font-size: 50px;
  color: ${sortedBy === 'name' ? red : black };
  transition: 0.5s;
  &:hover {
    color: ${ red };
    transition: 0.5s;
    cursor: pointer;
  };
  @media (max-width: 768px) {
    display: none;
  };
  `;

  return (
    <>
      <StyledSkillList>
        {skills.length === 0 ? <LoaderContainer margin={ '25% '} /> :
          skills.map((skill) =>
            <Skill skill={ skill } key={ skill.skillName } />,
          )
        }
      </StyledSkillList>
      <StyledButtonComfort sortedBy={ sortedBy } onClick={ () => sbComfortability(skills) }>
        <i className='fas fa-sort-amount-up'></i>
      </StyledButtonComfort>
      <StyledButtonName sortedBy={ sortedBy } onClick={ () => sbName(skills) }>
        <i className='fas fa-sort-alpha-up'></i>
      </StyledButtonName>
    </>
  );
};

export default SkillsList;
