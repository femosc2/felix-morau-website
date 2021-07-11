export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export type HeaderAction =
| { type: typeof SET_CURRENT_PAGE, page: string }

export const setCurrentPage = (page: string): HeaderAction => ({
  page,
  type: SET_CURRENT_PAGE,
});
