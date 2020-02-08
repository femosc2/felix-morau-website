/* eslint-disable no-unused-vars */

import {
  ProjectFiltersAction, SET_PROJECT_FILTERS_VISIBILITY,
} from './actions';


export interface IProjectFilters {
  visiblity: boolean
}

const initialDomainsState: IProjectFilters = {
  visiblity: false,
};

export const projectFilters = (state: IProjectFilters = initialDomainsState, action: ProjectFiltersAction) => {
  switch (action.type) {
  case SET_PROJECT_FILTERS_VISIBILITY:
    return {
      ...state,
      visbility: action.visibility,
    };
  }
  return state;
};
