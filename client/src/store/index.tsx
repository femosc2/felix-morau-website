import { header, IHeader } from 'components/SiteLayout/Header/redux/reducers';
import { combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

declare module 'redux' {
  export type GenericStoreEnhancer = StoreEnhancer;
}


export interface IStore {
  header: IHeader,
}

export const reducers = combineReducers<IStore>({
  header,
});

const reduxStore: Store<IStore> = createStore(
  reducers,
  composeWithDevTools(),
);

export default reduxStore;
