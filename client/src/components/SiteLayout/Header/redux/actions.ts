import { Languages } from 'models/languages';

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_TRANSLATIONS = 'SET_TRANSLATIONS';

export type HeaderAction =
| { type: typeof SET_CURRENT_PAGE, page: string }
| { type: typeof SET_LANGUAGE, language: Languages}
| { type: typeof SET_TRANSLATIONS, translations: Record<string, string> }

export const setCurrentPage = (page: string): HeaderAction => ({
  page,
  type: SET_CURRENT_PAGE,
});

export const setTranslations = (translations: Record<string, string>): HeaderAction => ({
  translations,
  type: SET_TRANSLATIONS,
});

export const setLanguage = (language: Languages): HeaderAction => ({
  language,
  type: SET_LANGUAGE,
});
