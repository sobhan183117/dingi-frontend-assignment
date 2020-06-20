import { fromJS } from 'immutable';
import itemListReducer from '../reducer';

describe('itemListReducer', () => {
  it('returns the initial state', () => {
    expect(itemListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
