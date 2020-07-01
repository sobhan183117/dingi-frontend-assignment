import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sales state domain
 */

const selectSalesDomain = state => state.get('sales', initialState);

/**
 * Other specific selectors
 */

const makeSelectBarChartData = () =>
  createSelector(selectSalesDomain, substate => substate.get('barChartData'));

const makeSelectPieChartData = () =>
  createSelector(selectSalesDomain, substate => substate.get('pieChartData'));

/**
 * Default selector used by Sales
 */

const makeSelectSales = () =>
  createSelector(selectSalesDomain, substate => substate.toJS());

export default makeSelectSales;
export {
  selectSalesDomain,
  makeSelectBarChartData,
  makeSelectPieChartData
};
