import {
  StructureAction,
  SET_ACTIVE_PAGE,
  SET_LAST_PAGE,
} from './actions';
export interface IStructure {
    activePage: string;
    lastPage: string;
}

const initialDomainsState: IStructure = {
  activePage: 'about',
  lastPage: '',
};

export const structure = (state: IStructure = initialDomainsState, action: StructureAction) => {
  switch (action.type) {
  case SET_ACTIVE_PAGE:
    return {
      ...state,
      activePage: action.activePage,
    };
  case SET_LAST_PAGE:
    return {
      ...state,
      lastPage: action.lastPage,
    };
  }
  return state;
};
