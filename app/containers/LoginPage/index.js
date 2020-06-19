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
import { Button, Form, InputGroup } from 'react-bootstrap';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

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
    return (
      <div>
        <Helmet>
          <title>LoginPage</title>
          <meta name="description" content="Description of LoginPage" />
        </Helmet>

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

          <Button type="submit" variant="primary">
            Login
          </Button>
        </Form>
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
