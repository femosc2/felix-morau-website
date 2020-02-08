export const SET_PROJECT_FILTERS_VISIBILITY = 'SET_PROJECT_FILTERS_VISIBILITY';


export type ProjectFiltersAction =
| { type: typeof SET_PROJECT_FILTERS_VISIBILITY, visibility: boolean }

export const setFilterModalVisbility = (visibility: boolean): ProjectFiltersAction => ({
  visibility,
  type: SET_PROJECT_FILTERS_VISIBILITY,
});
