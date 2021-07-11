/* eslint-disable no-unused-vars */
import { HeaderAction, SET_CURRENT_PAGE } from './actions';


export interface IHeader {
    pages: string[];
    currentPage: string;
}
  
const initialHeaderState: IHeader = {
  pages: ['about', 'page2'],
  currentPage: 'about',
};
  
export const header = (state: IHeader = initialHeaderState, action: HeaderAction): IHeader  => {
  switch (action.type) {
  case SET_CURRENT_PAGE:
    return {
      ...state,
      currentPage: action.page,
    };
  }
  return state;
};
