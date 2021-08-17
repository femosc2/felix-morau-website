import { useIsCompact } from 'hooks/isCompact';
import { Skill } from 'models/skill';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IStore } from 'store';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';


interface IProps {
    skill: Skill;
}

export const SkillComponent: React.FC<IProps> = (props) => {
  const { skill } = props;
  const [isHovered, setIsHovered] = useState(false);
  const language = useSelector<IStore>(state => state.header.language);
  const isCompact = useIsCompact();
  const descriptionLanguage = () => {
    switch(language) {
    case 'fr':
      return skill.descriptionFr.toLocaleLowerCase();
    case 'gb':
      return skill.descriptionGb.toLocaleLowerCase();
    case 'se':
      return skill.descriptionSe.toLocaleLowerCase();
    }
  };
  return (
    <StyledSkillBar
      comfortability={skill.comfortability}
      color={skill.color}
      onMouseEnter={() =>setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isCompact={isCompact}
    >
      <h4>{skill.name}</h4>
      {isHovered && <p>{descriptionLanguage()}</p>}
    </StyledSkillBar>
  );
};

const StyledSkillBar = styled.figure<{comfortability: number, color: string, isCompact: boolean}>`
    background-color: ${COLORS.primary};
    width: ${(props) => props.comfortability}vw;
    color: ${COLORS.darkWhite};
    transition: 0.2s;
    height: 5vh;
    margin-left: 0;
    &:hover {
        background-color: ${(props) => props.color};
        height: ${(props) => props.isCompact ? '25vh' : '15vh'};
    }
    > h4 {
        font-size: ${(props) => props.isCompact ? '15px' : '30px'};
        margin: 0;
    }
    > p {
      font-size: ${(props) => props.isCompact ? '12px' : '25px'};
    }
`;

