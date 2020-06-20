/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import LoginPage from 'containers/LoginPage';
import HomePage from 'containers/HomePage';

import Dashboard from 'containers/Dashboard';
import ItemList from 'containers/ItemList';

import NotFoundPage from 'containers/NotFoundPage';

import GlobalStyle from '../../global-styles';
import { getToken, getAuthenticatedStatus } from '../../utils/authHelper';
import PrivateRoute from '../../components/PrivateRoute';
import AppRoute from '../AppRoute';

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 auto;
  flex-direction: column;
`;

export default function App() {

  const token = JSON.parse(getToken());
  console.log('app-token', token);

  let authenticatedStatus = getAuthenticatedStatus();
  console.log('app-authenticatedStatus', authenticatedStatus);

  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>

      <AppRoute isAuthenticated={getAuthenticatedStatus()} />

      <GlobalStyle />
    </AppWrapper>
  );
}
