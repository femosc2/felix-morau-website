import './App.css';

import { AboutContainer } from 'components/About';
import { ContactContainer } from 'components/Contact';
import React from 'react';
import { Route, Switch } from 'react-router';

import HeaderContainer from '../Header';

const App: React.FC = () =>{
  return (
    <div className="App">
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={ AboutContainer } />
        <Route path={['/about']} component={ AboutContainer } />
        <Route path={['/contact']} component={ ContactContainer } />
        {/* <Route path="*" component={ ErrorPage } /> */}
      </Switch>
    </div>
  // );
  );
};

export default App;
