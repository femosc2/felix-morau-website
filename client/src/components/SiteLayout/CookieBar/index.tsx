import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IStore } from 'store';

import { CookieBar } from './CookieBar';
import { setIsShowing } from './redux/actions';


export const CookieBarContainer: React.FC = () => {
  const isShowing = useSelector<IStore, boolean>(state => state.cookieBar.isShowing);
  const [isCookiesEnabled, setIsCookiesEnabled] = useState(isShowing);

  useEffect(() => {
    setIsCookiesEnabled(localStorage.getItem('cookies') === null);
    console.log(isShowing);
  }, [isShowing]);

  return (
    <CookieBar isShowing={isCookiesEnabled} setIsShowing={setIsShowing} />
  );
};
