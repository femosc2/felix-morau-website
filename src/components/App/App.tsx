import React from 'react';
import { Structure } from 'pages/Structure';
import { ErrorPage } from 'pages/Error';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import TopBarContainer from 'components/TopBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="content" id="app-content">
        <TopBarContainer />
        <Switch>
          <Route exact path="/" component={ Structure } />
          <Route path={['/about', '/about/me', '/about/skills', '/contact', '/projects']}component={ Structure } />
          {/* <Route path="/projects:id" component={ projectPage } /> */}
          <Route path="*" component={ ErrorPage } />
        </Switch>
      </div>
    </div>
  );
};

export default App;
