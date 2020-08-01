import { IProject, IProjectModal } from './reducers';

export const SET_PROJECTS = 'SET_PROJECTS';
export const SET_PROJECTS_FILTER = 'SET_PROJECTS_FILTER';
export const SET_PROJECT_FILTERS_VISIBILITY = 'SET_PROJECT_FILTERS_VISIBILITY';
export const SET_PROJECTS_SKILLS = 'SET_PROJECTS_SKILLS';
export const SET_FILTERED_PROJECTS_SKILLS = 'SET_FILTERED_PROJECTS_SKILLS';
export const SET_PROJECTS_TYPES = 'SET_PROJECTS_TYPES';
export const SET_FILTERED_PROJECTS_TYPES = 'SET_FILTERED_PROJECTS_TYPES';
export const SET_PROJECT_MODAL = 'SET_PROJECT_MODAL';

export type ProjectsAction =
| { type: typeof SET_PROJECTS, projects: IProject[] }
| { type: typeof SET_PROJECTS_FILTER, projectsFilter: IProject[] }
| { type: typeof SET_PROJECT_FILTERS_VISIBILITY, visibility: boolean }
| { type: typeof SET_PROJECT_MODAL, projectModal: IProjectModal }
| { type: typeof SET_PROJECTS_SKILLS, projectsSkills: string[] }
| { type: typeof SET_PROJECTS_TYPES, projectsTypes: string[] }
| { type: typeof SET_FILTERED_PROJECTS_SKILLS, filteredProjectsSkills: string[] }
| { type: typeof SET_FILTERED_PROJECTS_TYPES, filteredProjectsTypes: string[] }

export const setProjects = (projects: IProject[]): ProjectsAction => ({
  projects,
  type: SET_PROJECTS,
});

export const setProjectsFilter = (projectsFilter: IProject[]): ProjectsAction => ({
  projectsFilter,
  type: SET_PROJECTS_FILTER,
});

export const setFilterModalVisbility = (visibility: boolean): ProjectsAction => ({
  visibility,
  type: SET_PROJECT_FILTERS_VISIBILITY,
});

export const setProjectModal = (projectModal: IProjectModal): ProjectsAction => ({
  projectModal,
  type: SET_PROJECT_MODAL,
});

export const setProjectsSkills = (projectsSkills: string[]): ProjectsAction => ({
  projectsSkills,
  type: SET_PROJECTS_SKILLS,
});

export const setProjectsTypes = (projectsTypes: string[]): ProjectsAction => ({
  projectsTypes,
  type: SET_PROJECTS_TYPES,
});

export const setFilteredProjectsSkills = (filteredProjectsSkills: string[]): ProjectsAction => ({
  filteredProjectsSkills,
  type: SET_FILTERED_PROJECTS_SKILLS,
});

export const setFilteredProjectsTypes = (filteredProjectsTypes: string[]): ProjectsAction => ({
  filteredProjectsTypes,
  type: SET_FILTERED_PROJECTS_TYPES,
});

