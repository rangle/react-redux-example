import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import App from '../containers/App';
import AboutPage from '../containers/AboutPage';
import CounterPage from '../containers/CounterPage';

export default (
  <Router path="/" component={ App }>
    <IndexRoute component={ CounterPage } />
    <Route path="/about" component={ AboutPage }/>
  </Router>
);
