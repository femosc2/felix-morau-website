import { AboutContainer } from 'components/About';
import { ContactContainer } from 'components/Contact';
import React from 'react';
import { Switch, Route } from 'react-router';
import HeaderContainer from '../Header';
import './App.css';

const App: React.FC = () =>{
  return (
    <div className="App">
      <HeaderContainer />
      <Switch>
          <Route exact path="/" component={ AboutContainer } />
          <Route path={['/about',]} component={ AboutContainer } />
          <Route path={['/contact',]} component={ ContactContainer } />
          {/* <Route path="*" component={ ErrorPage } /> */}
        </Switch>
    </div>
  // );
  );
};

export default App;
