/* eslint-disable no-unused-vars */

import {
  ModalAction, SET_MODAL_CONTENT,
} from './actions';


export interface IModal {
  content: 
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
