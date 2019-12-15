import { combineReducers, createStore, Store } from 'redux';
import { about, IAbout } from 'components/About/redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { structure, IStructure } from '../pages/Structure/redux/reducers';

declare module 'redux' {
  export type GenericStoreEnhancer = StoreEnhancer;
}


export interface IStore {
  about: IAbout;
  structure: IStructure;
}

export const reducers = combineReducers<IStore>({
  about,
  structure,
});

const reduxStore: Store<IStore> = createStore(
  reducers,
  composeWithDevTools(),
);

export default reduxStore;
