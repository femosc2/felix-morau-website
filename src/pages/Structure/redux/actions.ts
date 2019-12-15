export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
export const SET_LAST_PAGE = 'SET_LAST_PAGE';

export type StructureAction =
| { type: typeof SET_ACTIVE_PAGE, activePage: string }
| { type: typeof SET_LAST_PAGE, lastPage: string }

export const setActivePage = (activePage: string): StructureAction => ({
  activePage,
  type: SET_ACTIVE_PAGE,
});

export const setLastPage = (lastPage: string): StructureAction => ({
  lastPage,
  type: SET_LAST_PAGE,
});
