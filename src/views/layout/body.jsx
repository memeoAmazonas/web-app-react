import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Login from '../login';
import Home from '../home';

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
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Body;

