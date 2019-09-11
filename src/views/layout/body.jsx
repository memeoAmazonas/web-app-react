import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Login from '../login';

class Body extends React.PureComponent {
  render() {
    return (
      <div className="body">
        <Login />
      </div>
    );
  }
}

export default Body;

