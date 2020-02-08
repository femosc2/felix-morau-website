import { combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { structure, IStructure } from 'pages/Structure/redux/reducers';
import { skills, ISkills } from 'components/Skills/redux/reducers';
import { projects, IProjects } from 'components/Projects/redux/reducers';
import { projectFilters, IProjectFilters } from 'components/Projects/components/components/redux/reducers';

declare module 'redux' {
  export type GenericStoreEnhancer = StoreEnhancer;
}


export interface IStore {
  skills: ISkills;
  structure: IStructure;
  projects: IProjects;
  projectFilters: IProjectFilters;
}

export const reducers = combineReducers<IStore>({
  skills,
  structure,
  projects,
  projectFilters,
});

const reduxStore: Store<IStore> = createStore(
  reducers,
  composeWithDevTools(),
);

export default reduxStore;
