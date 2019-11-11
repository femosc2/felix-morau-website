/* eslint-disable no-unused-vars */

import {
  AboutAction,
  SET_ACTIVE_ABOUT,
} from './actions';

export interface IWidths {
    whoAmIWidth: number,
    whatDoIDoWidth: number,
}

export interface IAbout {
    whoAmIActive: boolean;
}

const initialDomainsState: IAbout = {
  whoAmIActive: false,
};

export const about = (state: IAbout = initialDomainsState, action: AboutAction) => {
  switch (action.type) {
  case SET_ACTIVE_ABOUT:
    return {
      ...state,
      whoAmIActive: action.isWhoAmIActive,
    };
  }
  return state;
};
