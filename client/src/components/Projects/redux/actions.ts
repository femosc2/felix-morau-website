import { Project } from 'models/projects';

export const SET_PROJECTS = 'SET_PROJECTS';

export type ProjectsAction =
| { type: typeof SET_PROJECTS, projects: Project[] ; }

export const setProjects = (projects: Project[]): ProjectsAction => ({
  projects,
  type: SET_PROJECTS,
});
