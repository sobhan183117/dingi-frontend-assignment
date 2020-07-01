/*
 *
 * Sales actions
 *
 */

import { DEFAULT_ACTION, SET_BAR_CHART_DATA, SET_PIE_CHART_DATA } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setBarChartData(barChartData) {
  console.log('barChartData', barChartData);
  
  return {
    type: SET_BAR_CHART_DATA,
     barChartData,
  };
}

export function setPieChartData(pieChartData) {
  return {
    type: SET_PIE_CHART_DATA, 
    pieChartData,
  };
}
