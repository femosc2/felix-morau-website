/* eslint-disable no-unused-vars */

import { ProjectsAction, SET_PROJECTS, SET_PROJECTS_FILTER, SET_PROJECT_FILTERS_VISIBILITY, SET_PROJECTS_SKILLS, SET_FILTERED_PROJECTS_SKILLS } from './actions';


export interface IProject {
  type: 'professional' | 'school' | 'hobby';
  description: string;
  github: string;
  image: string;
  stack: string[];
  name: string;
}
export interface IProjects {
    projects: IProject[];
    projectsFilter: IProject[];
    projectsFilterVisibility: boolean;
    projectsSkills: string[];
    filteredProjectsSkills: string [];
}

const initialDomainsState: IProjects = {
  projects: [],
  projectsFilter: [],
  projectsFilterVisibility: true,
  projectsSkills: [],
  filteredProjectsSkills: [],
};

export const projects = (state: IProjects = initialDomainsState, action: ProjectsAction) => {
  switch (action.type) {
  case SET_PROJECTS:
    return {
      ...state,
      projects: action.projects,
    };
  case SET_PROJECTS_FILTER:
    return {
      ...state,
      projectsFilter: action.projectsFilter,
    };
  case SET_PROJECT_FILTERS_VISIBILITY:
    return {
      ...state,
      projectsFilterVisibility: action.visibility,
    };
  case SET_PROJECTS_SKILLS:
    return {
      ...state,
      projectsSkills: action.projectsSkills,
    };
  case SET_FILTERED_PROJECTS_SKILLS:
    return {
      ...state,
      filteredProjectsSkills: action.filteredProjectsSkills,
    };
  }
  return state;
};
