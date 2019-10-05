import { IAbout, IWidths } from './reducers';

export const SET_ACTIVE_ABOUT = 'SET_ACTIVE_ABOUT'

export type AboutAction =
| { type: typeof SET_ACTIVE_ABOUT, isWhoAmIActive: boolean }

export const setActiveAbout = (isWhoAmIActive: boolean): AboutAction => ({
  isWhoAmIActive,
  type: SET_ACTIVE_ABOUT,
});