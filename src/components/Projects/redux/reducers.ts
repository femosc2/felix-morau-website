/* eslint-disable no-unused-vars */

import {
  ProjectsAction, SET_PROJECTS, SET_PROJECTS_FILTER,
} from './actions';


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
}

const initialDomainsState: IProjects = {
  projects: [],
  projectsFilter: [],
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
  }
  return state;
};