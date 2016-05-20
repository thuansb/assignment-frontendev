import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory, browserHistory } from 'react-router';
import AppRoutes from './app-routes.jsx';

//Helpers for debugging
window.React = React;

ReactDOM.render(
  <Router
    history={browserHistory}
    onUpdate={() => window.scrollTo(0, 0)}
  >
    {AppRoutes}
  </Router>
, document.getElementById('app'));
