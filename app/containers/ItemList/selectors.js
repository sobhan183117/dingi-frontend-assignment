import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the itemList state domain
 */

const selectItemListDomain = state => state.get('itemList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ItemList
 */

const makeSelectItemList = () =>
  createSelector(selectItemListDomain, substate => substate.toJS());

export default makeSelectItemList;
export { selectItemListDomain };
