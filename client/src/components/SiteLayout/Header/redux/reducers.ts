/* eslint-disable no-unused-vars */
import { Languages } from 'models/languages';

import { HeaderAction, SET_CURRENT_PAGE, SET_LANGUAGE, SET_TRANSLATIONS } from './actions';


export interface IHeader {
    pages: string[];
    currentPage: string;
    language: Languages;
    translations: Record<string, string>;
}
const initialHeaderState: IHeader = {
  pages: ['about', 'contact'],
  currentPage: 'about',
  language: 'gb',
  translations: {},
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
  case SET_TRANSLATIONS:
    return {
      ...state,
      translations: action.translations,
    };
  }
  return state;
};
