import { getTranslations } from 'api';
import { Languages } from 'models/languages';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { IStore } from 'store';

import { Header } from './Header';
import { setCurrentPage, setLanguage, setTranslations } from './redux/actions';

export const HeaderContainer: React.FC = () => {
  const currentPage: any = useSelector<IStore>(state => state.header.currentPage);
  const language: any = useSelector<IStore>(state => state.header.language);
  const dispatch = useDispatch();
  const history = useHistory();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollPosition(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollPosition]);

  const switchPage = (tabName: string) => {
    history.push(`/${ tabName }`);
    dispatch(setCurrentPage(tabName));
  };

  const switchLanguage = async (language: Languages) => {
    const translations = await getTranslations(language);
    dispatch(setTranslations(translations.data));
    dispatch(setLanguage(language));
  };

  return (
    <Header switchPage={ switchPage } switchLanguage={ switchLanguage } language={ language } currentPage={ currentPage}
      isAtTop={scrollPosition < 10}
    />
  );
};
