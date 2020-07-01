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
import { Header } from '../Header';
import Sidebar from '../../components/Sidebar';

import { makeSelectBarChartData, makeSelectPieChartData } from './selectors';
import { Bar, Pie } from 'react-chartjs-2';

/* eslint-disable react/prefer-stateless-function */
export class Sales extends React.Component {

  render() {

    let sidebarItems = [
      { key: 1, label: 'Sales', value: '/sales' },
      { key: 2, label: 'Customer', value: '/customer' },
    ]

    let barChartDataSet = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      datasets: this.props.barChartData.barChartDataArr,
    }

    let pieChartDataSet = {
      labels: this.props.pieChartData.pieChartLevelArr,
      datasets: [
        {
          backgroundColor: [
            "#caf270",
            "#45c490",
            "#008d93",
            "#2e5468",
            '#B21F00',
            '#C9DE00',
            '#2FDE00',
            '#00A6B4',
            '#6800B4'
          ],
          hoverBackgroundColor: [],
          data: this.props.pieChartData.pieChartDataArr,
        }
      ]

    }

    // console.log('barChartData-index', this.props.barChartData);
    console.log('pieChartData-index', this.props.pieChartData);

    return (

      <div>
        <Header />
        <div className="container fluid">
          <div className="container">
            <div className="row">

              <div className='col-md-2 p-0'><Sidebar sidebarItems={sidebarItems} /></div>
              <div className='col-md-10'>
                <div className='page-content-wrapper' style={{ position: 'sticky'}}>

                  {/* <div className="container">

                    <div className="row">
                      <div className='12'> */}

                        <Bar
                          data={barChartDataSet}
                          options={{
                            scales: {
                              xAxes: [{ stacked: true }],
                              yAxes: [{ stacked: true }]
                            },
                            title: {
                              display: true,
                              text: 'Product Sell This Month',
                              fontSize: 20,
                            },
                            legend: {
                              display: true,
                              position: 'right',
                            }
                          }}
                        />
                      {/* </div> */}

                      {/* <div className='12'> */}
                        <Pie
                          data={pieChartDataSet}
                          options={{
                            title: {
                              display: true,
                              text: 'Sell Product Comparison',
                              fontSize: 20
                            },
                            legend: {
                              display: true,
                              position: 'right'
                            }
                          }}
                        />

                      {/* </div>
                    </div>

                  </div> */}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

Sales.propTypes = {
  dispatch: PropTypes.func.isRequired,
  barChartData: PropTypes.any,
  pieChartData: PropTypes.any
};

const mapStateToProps = createStructuredSelector({
  sales: makeSelectSales(),
  barChartData: makeSelectBarChartData(),
  pieChartData: makeSelectPieChartData()
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
