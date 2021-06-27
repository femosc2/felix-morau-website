export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';

export type HeaderAction =
| { type: typeof SET_CURRENT_TAB, tab: string }

export const setCurrentTab = (tab: string): HeaderAction => ({
  tab,
  type: SET_CURRENT_TAB,
});
