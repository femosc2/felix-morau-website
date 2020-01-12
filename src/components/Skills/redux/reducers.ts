/* eslint-disable no-unused-vars */

import {
  SET_SKILLS_SORTED_BY, SkillsAction, SET_SKILLS,
} from './actions';


export interface ISkill {
  comfortability: number;
  skillName: string;
  description: string;
  color: string;
}
export interface ISkills {
    skillsSortedBy: string;
    skills: ISkill[];
}

const initialDomainsState: ISkills = {
  skillsSortedBy: '',
  skills: [],
};

export const skills = (state: ISkills = initialDomainsState, action: SkillsAction) => {
  switch (action.type) {
  case SET_SKILLS_SORTED_BY:
    return {
      ...state,
      skillsSortedBy: action.skillsSortedBy,
    };
  case SET_SKILLS:
    return {
      ...state,
      skills: action.skills,
    };
  }
  return state;
};
