import { combineReducers, createStore, Store } from 'redux';
import { about, IAbout } from '../components/About/redux/reducers';

declare module "redux" {
  export type GenericStoreEnhancer = StoreEnhancer;
}


export interface IStore {
  about: IAbout;
}

export const reducers = combineReducers<IStore>({
    about
});

const reduxStore: Store<IStore> = createStore(
  reducers,
)

export default reduxStore;