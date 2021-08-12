import { cookieBar, ICookieBar } from 'components/SiteLayout/CookieBar/redux/reducers';
import { header, IHeader } from 'components/SiteLayout/Header/redux/reducers';
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IStore {
  header: IHeader,
  cookieBar: ICookieBar
}

export const reducers = combineReducers<IStore>({
  header,
  cookieBar,
});

const reduxStore: Store<IStore> = createStore(
  reducers,
  composeWithDevTools(applyMiddleware()),
);

export default reduxStore;
