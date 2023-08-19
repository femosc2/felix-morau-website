/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { Languages } from 'models/languages';

import { HeaderAction, SET_CURRENT_PAGE, SET_LANGUAGE, SET_TRANSLATIONS } from './actions';


export interface IHeader {
    currentPage: string;
    language: Languages;
    translations: Record<string, string>;
}
const initialHeaderState: IHeader = {
  currentPage: 'about',
  language: 'gb',
  translations: {
    About: 'about',
    AboutContent: 'i\'m felix morau, a twenty-five year old web developer based in malmö, sweden. this is my personal page where i showcase things i do!',
    Contact: 'contact',
    CookieBar: 'this site uses cookies to improve the user experience, do you allow this website to store cookies?',
    Hello: 'hello!',
    WebDeveloperDesigenr: 'web developer & designer',
    about: 'i\'m felix morau, a twenty-five year old web developer based in malmö, sweden. this is my personal page where i showcase things i do!',
    'ask me something': 'ask me something',
    'check out what movies i watch': 'check out what movies i watch',
    'follow my ramblings': 'follow my ramblings',
    'have a look at my illustrations': 'have a look at my illustrations',
    'look at my professional life': 'look at my professional life',
    'open a pull request': 'open a pull request',
    projects: 'projects',
    skills: 'skills',
  },
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
