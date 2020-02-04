/* eslint-disable no-unused-vars */

import {
  ProjectsAction, SET_PROJECTS,
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
}

const initialDomainsState: IProjects = {
  projects: [],
};

export const projects = (state: IProjects = initialDomainsState, action: ProjectsAction) => {
  switch (action.type) {
  case SET_PROJECTS:
    return {
      ...state,
      projects: action.projects,
    };
  }
  return state;
};
