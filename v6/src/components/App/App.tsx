import React from 'react';

import { AboutPage } from '../../pages/About/AboutPage';
import { ProjectsPage } from '../../pages/Projects/ProjectsPage';
import { ContactPage } from '../../pages/Contact/ContactPage'
import { ErrorPage } from '../../pages/Error/ErrorPage';

import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="content" id="app-content">
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
