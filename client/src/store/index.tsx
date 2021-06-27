import { combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { structure, IStructure } from 'pages/Structure/redux/reducers';
import { skills, ISkills } from 'components/Skills/redux/reducers';
import { projects, IProjects } from 'components/Projects/redux/reducers';

declare module 'redux' {
  export type GenericStoreEnhancer = StoreEnhancer;
}


export interface IStore {
  skills: ISkills;
  structure: IStructure;
  projects: IProjects;
}

export const reducers = combineReducers<IStore>({
  skills,
  structure,
  projects,
});

const reduxStore: Store<IStore> = createStore(
  reducers,
  composeWithDevTools(),
);

export default reduxStore;
