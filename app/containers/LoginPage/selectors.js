import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.get('loginPage', initialState);

/**
 * Other specific selectors
 */
const makeSelectUserName = () =>
  createSelector(selectLoginPageDomain, substate => substate.get('userName'));

const makeSelectPassword = () =>
  createSelector(selectLoginPageDomain, substate => substate.get('password'));

const makeSelectAuthStatus = () =>
  createSelector(selectLoginPageDomain, substate => substate.get('authStatus'));
/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () =>
  createSelector(selectLoginPageDomain, substate => substate.toJS());

export default makeSelectLoginPage;
export { selectLoginPageDomain, makeSelectUserName, makeSelectPassword, makeSelectAuthStatus };
