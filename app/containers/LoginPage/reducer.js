/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, SET_USER_NAME, SET_PASSWORD, SET_AUTH_STATUS } from './constants';

export const initialState = fromJS({
  userName: '',
  password: '',
  authStatus: false,
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case SET_USER_NAME:
      return state.set('userName', action.userName);

    case SET_PASSWORD:
      return state.set('password', action.password);

    case SET_AUTH_STATUS:
      return state.set('authStatus', action.authStatus);

    default:
      return state;
  }
}

export default loginPageReducer;
