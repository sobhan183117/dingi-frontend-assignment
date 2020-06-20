/**
 *
 * Sales
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
import makeSelectSales from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Sales extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Sales</title>
          <meta name="description" content="Description of Sales" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Sales.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sales: makeSelectSales(),
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

const withReducer = injectReducer({ key: 'sales', reducer });
const withSaga = injectSaga({ key: 'sales', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Sales);
