/**
 *
 * Dashboard
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
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Header } from '../Header';
import Sidebar from '../../components/Sidebar';

/* eslint-disable react/prefer-stateless-function */
export class Dashboard extends React.Component {

  render() {

    let sidebarItems = [
      { label: 'Sales', value: '/sales' },
      { label: 'Customer', value: '/customer' },
    ]

    return (
      <div>

        <Header />

        <div className="container fluid">
          <div className="container">
            <div className="row">

              <div className='col-md-3 p-0'><Sidebar sidebarItems={sidebarItems} /></div>
              <div className='col-md-9 '>
                <div className='page-content-wrapper'></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
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

const withReducer = injectReducer({ key: 'dashboard', reducer });
const withSaga = injectSaga({ key: 'dashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Dashboard);
