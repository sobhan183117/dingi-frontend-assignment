import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the customer state domain
 */

const selectCustomerDomain = state => state.get('customer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Customer
 */

const makeSelectCustomer = () =>
  createSelector(selectCustomerDomain, substate => substate.toJS());

export default makeSelectCustomer;
export { selectCustomerDomain };
