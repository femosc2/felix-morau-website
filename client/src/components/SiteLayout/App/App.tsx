import './App.css';

import { getTranslations } from 'api';
import { AboutContainer } from 'components/About';
import { ContactContainer } from 'components/Contact';
import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { IStore } from 'store';

import CookieBarContainer from '../CookieBar';
import FooterContainer from '../Footer';
import HeaderContainer from '../Header';
import { setCurrentPage, setTranslations } from '../Header/redux/actions';

type Props =  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const App: React.FC<Props> = (props) =>{
  useEffect(() => {
    getTranslations(props.language).then((translations) => props.setTranslations(translations.data));
    props.setCurrentPage(window.location.pathname.substring(1));
  }, []);
  return (
    <div className="App">
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={ AboutContainer } />
        <Route path={['/about']} component={ AboutContainer } />
        <Route path={['/contact']} component={ ContactContainer } />
        {/* <Route path="*" component={ ErrorPage } /> */}
      </Switch>
      <CookieBarContainer />
      <FooterContainer />
    </div>
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    language: store.header.language,
  };
};
  
const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setTranslations,
    setCurrentPage,
  }, dispatch);
};
  
export default compose<Props, Record<string, unknown>>(
  connect(mapStateToProps, mapDispatchToProps),
)(App);
