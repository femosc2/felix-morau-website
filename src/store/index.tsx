import { combineReducers, createStore, Store } from 'redux';
import { about, IAbout } from '../components/About/redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

declare module 'redux' {
  export type GenericStoreEnhancer = StoreEnhancer;
}


export interface IStore {
  about: IAbout;
}

export const reducers = combineReducers<IStore>({
  about,
});

const reduxStore: Store<IStore> = createStore(
  reducers,
  composeWithDevTools(),
);

export default reduxStore;
