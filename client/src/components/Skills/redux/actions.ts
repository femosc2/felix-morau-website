import { Skill } from 'models/skill';

export const SET_SKILLS = 'SET_SKILLS';

export type SkillsAction =
| { type: typeof SET_SKILLS, skills: Skill[] ; }

export const setSkills = (skills: Skill[]): SkillsAction => ({
  skills,
  type: SET_SKILLS,
});
