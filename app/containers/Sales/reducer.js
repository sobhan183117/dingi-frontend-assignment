/*
 *
 * Sales reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, SET_BAR_CHART_DATA, SET_PIE_CHART_DATA } from './constants';

export const initialState = fromJS({
  barChartData: [],
  pieChartData: []
});

function salesReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case SET_BAR_CHART_DATA:
      console.log('reducer', action.barChartData);
      
      return state.set('barChartData', action.barChartData);

    case SET_PIE_CHART_DATA:
      return state.set('pieChartData', action.pieChartData);

    default:
      return state;
  }
}

export default salesReducer;
