/**
 *
 * PrivateRoute
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Route, Link, Redirect } from "react-router-dom";
import { getToken, getAuthenticatedStatus } from '../../utils/authHelper';

/* eslint-disable react/prefer-stateless-function */
function PrivateRoute({ component: Component, ...rest }) {

  console.log('called private route', getAuthenticatedStatus());

  return (<Route {...rest} render={(props) => (
    getAuthenticatedStatus() == 'true' ? <Component {...props} /> :
      <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location }
        }}
      />

  )} />);
}

PrivateRoute.propTypes = {};

export default PrivateRoute;
