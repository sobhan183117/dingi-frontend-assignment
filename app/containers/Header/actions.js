/*
 *
 * Header actions
 *
 */

import { DEFAULT_ACTION, SUBMIT_LOGOUT } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function submitLogout(){
  return{ 
    type: SUBMIT_LOGOUT
  }
}
