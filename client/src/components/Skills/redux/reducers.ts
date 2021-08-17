import { Skill } from 'models/skill';

import { SET_SKILLS, SkillsAction } from './actions';


export interface ISkills {
    skills: Skill[];
}
const initialHeaderState: ISkills = {
  skills: [],
};
  
export const skills = (state: ISkills = initialHeaderState, action: SkillsAction): ISkills  => {
  switch (action.type) {
  case SET_SKILLS:
    return {
      ...state,
      skills: action.skills,
    };
  }
  return state;
};
