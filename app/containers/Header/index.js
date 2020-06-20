/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHeader from './selectors';
import reducer from './reducer';
import saga from './saga';

import logo from '../../assets/img/dingiLogo.png';
import { setToken, setAuthenticatedStatus } from '../../utils/authHelper';
import { submitLogout } from './actions';
import {Redirect, Link } from 'react-router-dom';

/* eslint-disable react/prefer-stateless-function */
export class Header extends React.Component {

  constructor(props) {
    super();
  }

  logoutSubmit = () => {

    console.log('logout pressed');

    setAuthenticatedStatus(false);
    setToken(JSON.stringify({}));
    window.location.replace('/login');

  }

  render() {
    return (
      <div>
        <header className="header-wrapper pt-1 pb-1">
          <div className="container fluid">
            <div className="container">
              <div className="row">

                <div className="col-md-6">

                  <div className="d-flex flex-row">
                    <div className="p-2 text-secondary align-self-center">
                      <div className="logo-wrapper d-block"><img src={logo} /></div>
                    </div>
                    <div className="p-2 text-secondary align-self-center"><span></span>Dashboard</div>
                    <div className="p-2 text-secondary align-self-center">Item List</div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex flex-row  justify-content-end ">
                    <div className="p-2 text-secondary align-self-center m-t-10">
                      <span style={{ color: "#0078ff", cursor: "pointer" }} onClick={this.logoutSubmit} >Logout</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  handleLogout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  header: makeSelectHeader(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleLogout: () => { dispatch(submitLogout()) }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'header', reducer });
const withSaga = injectSaga({ key: 'header', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Header);
