/* eslint-disable no-unused-vars */
import { Languages } from 'models/languages';

import { HeaderAction, SET_CURRENT_PAGE, SET_LANGUAGE } from './actions';


export interface IHeader {
    pages: string[];
    currentPage: string;
    language: Languages;
}
  
const initialHeaderState: IHeader = {
  pages: ['about', 'page2'],
  currentPage: 'about',
  language: 'en',
};
  
export const header = (state: IHeader = initialHeaderState, action: HeaderAction): IHeader  => {
  switch (action.type) {
  case SET_CURRENT_PAGE:
    return {
      ...state,
      currentPage: action.page,
    };
  case SET_LANGUAGE:
    return {
      ...state,
      language: action.language,
    };
  }
  return state;
};
