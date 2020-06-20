/**
 *
 * Customer
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
import makeSelectCustomer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Customer extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Customer</title>
          <meta name="description" content="Description of Customer" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Customer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  customer: makeSelectCustomer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'customer', reducer });
const withSaga = injectSaga({ key: 'customer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Customer);
