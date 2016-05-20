import React from 'react';
import {
  Route,
  Redirect,
  IndexRedirect
} from 'react-router';
import Master from './components/master.jsx';
import Users from './components/pages/users/index.jsx';
import Login from './components/pages/login/index.jsx';
import UserDetail from './components/pages/user-detail/index.jsx';
import Auth from './utils/auth.js';

function requireLogin(nextState, replace) {
  if (!Auth.isLoggedIn()){
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const AppRoutes = (
  <Route path="/" component={Master}>
    <IndexRedirect to="/users" />
    <Route path="users" component={Users} onEnter={requireLogin}/>
    <Route path="login" component={Login} />
    <Route path="user-detail" component ={UserDetail} />
  </Route>
);

module.exports = AppRoutes;
