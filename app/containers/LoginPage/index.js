/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Button, Form, InputGroup, Container } from 'react-bootstrap';
import makeSelectLoginPage, { makeSelectAuthStatus } from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import { Redirect } from 'react-router-dom';
import { setUserName, setPassword, submitLogin } from './actions';
import { makeSelectUserName, makeSelectPassword } from './selectors';

export class LoginPage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      validated: false,
    };
  }

  handleSubmit = event => {
    console.log('event', event);
    const form = event.currentTarget;
    console.log('form', form);
    console.log('form.checkValidity()', form.checkValidity());

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
    event.preventDefault();
    this.props.submitLoginForm();
  };

  render() {

    console.log('authStatus-Index', this.props.authStatus);

    if (this.props.authStatus == true) {
      console.log('auth-true');
      const from = { pathname: "/home" };
      return <Redirect to={from} />
    }

    return (
      <div>
        <Container fluid className='remove-padding'>

          <div className='login-body'>

            <div className="login-panel">


            </div>
          </div>

        </Container>

        {/* <div className="container">
            <div className="row">

              <div className='col-md-3' />

              <div className='col-md-6'>
                <div className='m-t-100'>

                  <Form
                    noValidate
                    validated={this.state.validated}
                    onSubmit={this.handleSubmit}
                  >
                    <Form.Group controlId="formBasicUserName">
                      <Form.Label>User Name</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="text"
                          required
                          placeholder="User Name"
                          value={this.props.userName}
                          onChange={this.props.onChangeUserName}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a username.
              </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="password"
                          required
                          placeholder="Password"
                          value={this.props.password}
                          onChange={this.props.onChangePassword}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a password.
              </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>

                    <Button type="submit" variant="primary" >
                      Login
          </Button>
                  </Form>
                </div>

              </div>
              <div className='col-md-3' />

            </div>
          </div> */}

      </div>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,

  onChangeUserName: PropTypes.func,
  onChangePassword: PropTypes.func,

  userName: PropTypes.string,
  password: PropTypes.string,
  submitLoginForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
  userName: makeSelectUserName(),
  password: makeSelectPassword(),
  authStatus: makeSelectAuthStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChangeUserName: event => dispatch(setUserName(event.target.value)),
    onChangePassword: event => dispatch(setPassword(event.target.value)),
    submitLoginForm: () => dispatch(submitLogin()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
