import React from 'react';

import { AboutPage } from '../../pages/About';
import { ProjectsPage } from '../../pages/Projects';
import { ContactPage } from '../../pages/Contact'
import { ErrorPage } from '../../pages/Error';

import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';

import TopBarContainer from '../TopBar';

import store from "../../store"

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="content" id="app-content">
      <TopBarContainer />
        <Switch>
            <Route exact path="/" component={ AboutPage } />
            <Route path="/about" component={ AboutPage } />
            <Route path="/projects" component={ ProjectsPage } />
            {/* <Route path="/projects:id" component={ projectPage } /> */}
            <Route path="/contact" component={ ContactPage } />
            <Route path="*" component={ ErrorPage } />
        </Switch>
      </div>
      </div>
  );
}

export default App;
