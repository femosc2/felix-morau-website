import {
  StructureAction,
  SET_ACTIVE_PAGE,
} from './actions';

export interface IStructure {
    activePage: string;
}

const initialDomainsState: IStructure = {
  activePage: 'about',
};

export const structure = (state: IStructure = initialDomainsState, action: StructureAction) => {
  switch (action.type) {
  case SET_ACTIVE_PAGE:
    return {
      ...state,
      activePage: action.activePage,
    };
  }
  return state;
};
