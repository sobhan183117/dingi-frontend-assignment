import { fromJS } from 'immutable';
import customerReducer from '../reducer';

describe('customerReducer', () => {
  it('returns the initial state', () => {
    expect(customerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
