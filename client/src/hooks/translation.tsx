import { getTranslation } from 'api';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { IStore } from '../store';


export const useTranslation = (word: string) => {
  const [translation, setTranslation] = useState(word);
  const language = useSelector<IStore>(state => state.header.language);
  getTranslation(word).then((res) => Object.entries(res.data).forEach(([key, value]: any) => key === language && setTranslation(value) ));

  return translation;
}