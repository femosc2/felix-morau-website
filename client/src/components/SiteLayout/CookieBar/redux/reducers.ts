/* eslint-disable no-unused-vars */
import { CookieBarAction, SET_IS_SHOWING } from './actions';


export interface ICookieBar {
    isShowing: boolean;
}
const initialHeaderState: ICookieBar = {
  isShowing: true,
};
  
export const cookieBar = (state: ICookieBar = initialHeaderState, action: CookieBarAction): ICookieBar  => {
  switch (action.type) {
  case SET_IS_SHOWING:
    return {
      ...state,
      isShowing: action.isShowing,
    };
  }
  return state;
};
