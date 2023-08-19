import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IStore } from 'store';

import { Footer } from './Footer';

export const FooterContainer: React.FC = () => {
  const currentPage = useSelector<IStore, string>(state => state.header.currentPage);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollPosition(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollPosition]);

  return (
    <Footer currentPage={currentPage} isAtTop={scrollPosition < 10} />
  );
};

