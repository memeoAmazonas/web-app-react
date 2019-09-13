import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Login from '../login';
import Home from '../home';
import Utc from '../utc';

class Body extends React.PureComponent {
  render() {
    return (
      <div className="body">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (<Login />)}
            />
            <Route
              exact
              path="/home"
              render={() => (<Home />)}
            />            <Route
              exact
              path="/utc"
              render={() => (<Utc />)}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Body;

