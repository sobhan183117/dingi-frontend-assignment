/**
 *
 * ItemList
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
import makeSelectItemList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class ItemList extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>ItemList</title>
          <meta name="description" content="Description of ItemList" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ItemList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  itemList: makeSelectItemList(),
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

const withReducer = injectReducer({ key: 'itemList', reducer });
const withSaga = injectSaga({ key: 'itemList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ItemList);
