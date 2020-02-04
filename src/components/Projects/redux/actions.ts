import { IProject } from './reducers';

export const SET_PROJECTS = 'SET_PROJECTS';


export type ProjectsAction =
| { type: typeof SET_PROJECTS, projects: IProject[] }

export const setProjects = (projects: IProject[]): ProjectsAction => ({
  projects,
  type: SET_PROJECTS,
});
