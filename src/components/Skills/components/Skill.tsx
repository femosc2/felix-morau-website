import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';
import { ISkill } from '../redux/reducers';
import { Revealer } from 'variables/animations';

interface IProps {
  skill: ISkill;
}

const Skill: React.FC<IProps> = (props) => {
  const c = { ...COLORS };
  const { skill } = props;

  const StyledBarFill = styled.div<{ width: string, color: string, text: string}>`
  height: 20px;
  padding: 50px;
  width: ${(props) => props.width};
  background-color: ${c.red};
  transition: 0.5s;
  font-size: 30px;

  &:hover {
    background-color: ${(props) => props.color};
    transition: 0.5s;
    height: 100px;
    line-height: 20px;
    color: ${ c.black };

    &::after {
      content: '${(props) => props.text}';
      font-size: 16px;
    }
  }
  `;

  const StyledSkill = styled.div`
  width: 50%;
  background: ${c.transparentBlack};
  margin-top: 1%;
  text-align: left;
  min-height: 50px;
  color: ${ c.white };
  `;

  return (
    <StyledSkill key={ skill.skillName }>
      <Revealer boxColor={ c.red }>
        <StyledBarFill color={ skill.color } width={ `${skill.comfortability  }%`} text={ skill.description }>
          {skill.skillName}
          <br />
        </StyledBarFill>
      </Revealer>
    </StyledSkill>
  );
};


export default Skill;
