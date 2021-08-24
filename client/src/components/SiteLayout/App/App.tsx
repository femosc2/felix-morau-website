import './App.css';

import { getTranslations } from 'api';
import { Languages } from 'models/languages';
import { AboutPage } from 'pages/About';
import { ContactPage } from 'pages/Contact';
import { ProjectsPage } from 'pages/Projects';
import { SkillsPage } from 'pages/Skills';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { IStore } from 'store';

import { FooterContainer } from '../Footer';
import { HeaderContainer } from '../Header';
import { setCurrentPage, setTranslations } from '../Header/redux/actions';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const language = useSelector<IStore, Languages>(
    (state) => state.header.language,
  );
  useEffect(() => {
    getTranslations(language).then((translations) =>
      dispatch(setTranslations(translations.data)),
    );
    window.location.pathname.substring(1) !== ''
      ? dispatch(setCurrentPage(window.location.pathname.substring(1)))
      : 'about';
  }, []);
  return (
    <div className="App">
      <HeaderContainer />
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="fade">
          <Switch>
            <Route exact path="/" component={AboutPage} />
            <Route path={['/about']} component={AboutPage} />
            <Route path={['/contact']} component={ContactPage} />
            <Route path={['/projects']} component={ProjectsPage} />
            <Route path={['/skills']} component={SkillsPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <FooterContainer />
    </div>
  );
};
