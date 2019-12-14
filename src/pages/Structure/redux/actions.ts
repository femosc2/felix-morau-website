export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';

export type StructureAction =
| { type: typeof SET_ACTIVE_PAGE, activePage: string }

export const setActiveAbout = (activePage: string): StructureAction => ({
  activePage,
  type: SET_ACTIVE_PAGE,
});
