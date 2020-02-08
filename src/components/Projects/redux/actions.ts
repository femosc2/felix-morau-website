import { IProject } from './reducers';

export const SET_PROJECTS = 'SET_PROJECTS';
export const SET_PROJECTS_FILTER = 'SET_PROJECTS_FILTER';


export type ProjectsAction =
| { type: typeof SET_PROJECTS, projects: IProject[] }
| { type: typeof SET_PROJECTS_FILTER, projectsFilter: IProject[] }

export const setProjects = (projects: IProject[]): ProjectsAction => ({
  projects,
  type: SET_PROJECTS,
});

export const setProjectsFilter = (projectsFilter: IProject[]): ProjectsAction => ({
  projectsFilter,
  type: SET_PROJECTS_FILTER,
});
