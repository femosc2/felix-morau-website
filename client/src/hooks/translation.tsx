import { useSelector } from 'react-redux';
import { IStore } from 'store';


export const useTranslation = (word: string): string => {
  const translations: any = useSelector<IStore>(state => state.header.translations);
  return translations[word];
};
