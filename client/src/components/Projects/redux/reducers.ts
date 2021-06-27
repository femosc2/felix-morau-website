/* eslint-disable no-unused-vars */

import { ProjectsAction, SET_PROJECTS, SET_PROJECTS_FILTER, SET_PROJECT_FILTERS_VISIBILITY,
  SET_PROJECTS_SKILLS, SET_FILTERED_PROJECTS_SKILLS, SET_PROJECTS_TYPES, SET_FILTERED_PROJECTS_TYPES, SET_PROJECT_MODAL } from './actions';


export interface IProject {
  type: 'professional' | 'school' | 'hobby';
  description: string;
  link: string;
  image: string;
  stack: string[];
  name: string;
}

export interface IProjectModal {
  visibility: boolean;
  project?: IProject;
}
export interface IProjects {
    projects: IProject[];
    projectsFilter: IProject[];
    projectsFilterVisibility: boolean;
    projectsSkills: string[];
    projectsTypes: string [];
    filteredProjectsSkills: string[];
    filteredProjectsTypes: string[];
    projectModal: IProjectModal;
}

const initialDomainsState: IProjects = {
  projects: [],
  projectsFilter: [],
  projectsFilterVisibility: false,
  projectsSkills: [],
  filteredProjectsSkills: [],
  projectsTypes: [],
  filteredProjectsTypes: ['hobby', 'professional', 'school'],
  projectModal: {
    project: undefined,
    visibility: false,
  },
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
  case SET_PROJECTS_TYPES:
    return {
      ...state,
      projectsTypes: action.projectsTypes,
    };
  case SET_FILTERED_PROJECTS_TYPES:
    return {
      ...state,
      filteredProjectsTypes: action.filteredProjectsTypes,
    };
  case SET_PROJECT_MODAL:
    return {
      ...state,
      projectModal: action.projectModal,
    };
  }
  return state;
};
