import { ISkill } from './reducers';

export const SET_SKILLS_SORTED_BY = 'SET_SKILLS_SORTED_BY';
export const SET_SKILLS = 'SET_SKILLS';


export type SkillsAction =
| { type: typeof SET_SKILLS_SORTED_BY, skillsSortedBy: string }
| { type: typeof SET_SKILLS, skills: ISkill[] }

export const setSkillsSortedBy = (skillsSortedBy: string): SkillsAction => ({
  skillsSortedBy,
  type: SET_SKILLS_SORTED_BY,
});

export const setSkills = (skills: ISkill[]): SkillsAction => ({
  skills,
  type: SET_SKILLS,
});
