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
import { Header } from '../Header';

/* eslint-disable react/prefer-stateless-function */
export class ItemList extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className="container fluid">
          <div className="container">
            <div className="row">
              <div className='col-md-12'>

              </div>
            </div>
          </div>
        </div>
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
