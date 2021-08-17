/* eslint-disable no-unused-vars */
import { Project } from 'models/projects';

import { ProjectsAction, SET_PROJECTS } from './actions';


export interface IProjects {
    projects: Project[];
}
const initialHeaderState: IProjects = {
  projects: [],
};
  
export const projects = (state: IProjects = initialHeaderState, action: ProjectsAction): IProjects  => {
  switch (action.type) {
  case SET_PROJECTS:
    return {
      ...state,
      projects: action.projects,
    };
  }
  return state;
};
