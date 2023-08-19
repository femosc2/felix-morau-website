export const SET_IS_SHOWING = 'SET_IS_SHOWING';

export type CookieBarAction =
| { type: typeof SET_IS_SHOWING, isShowing: boolean; }

export const setIsShowing = (isShowing: boolean): CookieBarAction => ({
  isShowing,
  type: SET_IS_SHOWING,
});
