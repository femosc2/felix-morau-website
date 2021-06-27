/* eslint-disable no-unused-vars */

import {
  HeaderAction, SET_CURRENT_TAB,
} from './actions';

export interface IHeader {
    tabs: string[];
    currentTab: string;
}
  
const initialDomainsState: IHeader = {
  tabs: ['home', 'page2'],
  currentTab: 'home',
};
  
export const header = (state: IHeader = initialDomainsState, action: HeaderAction) => {
  switch (action.type) {
  case SET_CURRENT_TAB:
    return {
      ...state,
      currentTab: action.tab,
    };
  }
  return state;
};
