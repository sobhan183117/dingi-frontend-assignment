import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { setAuthenticatedStatus, setToken } from '../../utils/authHelper';

export function* submitLogoutHandle(){
console.log('logout pressed');

  setAuthenticatedStatus(false);
  setToken(JSON.stringify({}));
  
}
// Individual exports for testing
export default function* headerSaga() {
  yield takeLatest(SUBMIT_LOGOUT, submitLogoutHandle)
}
