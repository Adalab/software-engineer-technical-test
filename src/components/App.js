import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import PasswordForget from './pages/PasswordForget';
import Home from './pages/Home';
import Account from './pages/Account';
import Navigation from './Navigation';

import SignInForm from './pages/SignIn';
import { PasswordForgetLink } from './pages/PasswordForget';
import { SignUpLink } from './pages/SignUp';

import withAuthentication from './auth/withAuthentication';

import * as ROUTES from '../constants/routes';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path={ROUTES.LANDING}
        element={
          <Landing>
            <SignInForm />
            <PasswordForgetLink />
            <SignUpLink />
          </Landing>
        }
      />
      <Route
        path={ROUTES.SIGN_UP}
        element={
          <Landing>
            <SignUp />
          </Landing>
        }
      />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        element={
          <Landing>
            <PasswordForget />
          </Landing>
        }
      />
      <Route path={ROUTES.HOME} element={withNavigation(Home)} />
      <Route path={ROUTES.ACCOUNT} element={withNavigation(Account)} />
    </Routes>
  </BrowserRouter>
);

const withNavigation = (Component) => (
  <React.Fragment>
    <Navigation />
    <Component />
  </React.Fragment>
);

export default withAuthentication(App);
