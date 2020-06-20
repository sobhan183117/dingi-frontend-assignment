import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sales state domain
 */

const selectSalesDomain = state => state.get('sales', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Sales
 */

const makeSelectSales = () =>
  createSelector(selectSalesDomain, substate => substate.toJS());

export default makeSelectSales;
export { selectSalesDomain };
