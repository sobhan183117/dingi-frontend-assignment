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
import { Redirect, Link } from 'react-router-dom';

import { Navbar, Nav, NavbarBrand, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export class Header extends React.Component {

  static defaultProps = {
    history: null
  }

  static propTypes = {
    history: PropTypes.object
  }

  constructor(props) {
    super();
  }

  logoutSubmit = () => {

    console.log('logout pressed');

    setAuthenticatedStatus(false);
    localStorage.removeItem('token');

    // localStorage.clear();
    // setToken(JSON.stringify({}));
    // this.props.history.replace('/login')

    window.location.replace('/login');

  }

  render() {
    return (
      <div>
        <header className="header-wrapper pt-1 pb-1">
          <div className="container fluid">
            <div className="container">
              <div className="row">

                <div className='col-md-12 p-0'>
                  <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">
                        <Nav.Link href="dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="item_list">Item List</Nav.Link>
                      </Nav>
                      <Form inline>
                        <Nav onSelect={(selectedKey) => this.logoutSubmit(selectedKey)}>
                          <Nav.Link eventKey='logout' >Logout</Nav.Link>
                        </Nav>
                      </Form>
                    </Navbar.Collapse>
                  </Navbar>
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
