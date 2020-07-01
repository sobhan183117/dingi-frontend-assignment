/**
 *
 * PrivateRoute
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Route, Link, Redirect } from "react-router-dom";
import { getToken } from '../../utils/authHelper';
getToken
/* eslint-disable react/prefer-stateless-function */
const PrivateRoute=({  component: Component,  isAuthenticated, ...rest }) =>{

  // allowed for roleWise routing auth & also need data from backEnd to verify
 
//   let token = JSON.parse(getToken());
// console.log('pRoute', token);

 return <Route
  {...rest}
   render={props => (
    isAuthenticated? <Component {...props} />
     :
      <Redirect to="" /> 
   
      // restricted.length == allowed.length ?
      // <Redirect
      //   to={{
      //     pathname: "",
      //     state: { from: props.location }
      //   }}
      // /> : <Component {...props} />

  )} />

}

PrivateRoute.propTypes = {};

export default PrivateRoute;
