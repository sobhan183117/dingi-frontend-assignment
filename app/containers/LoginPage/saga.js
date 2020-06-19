import { select, takeLatest } from 'redux-saga/effects';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { SUBMIT_LOGIN } from './constants';
import { makeSelectUserName, makeSelectPassword } from './selectors';
import { setToken, setAuthenticatedStatus } from '../../utils/authHelper';

export function* submitLoginForm() {
  console.log('userName', yield select(makeSelectUserName()));
  console.log('password', yield select(makeSelectPassword()));

  console.log('submit-req-in-saga');
  const requestedObj = {
    username: yield select(makeSelectUserName()),
    password: yield select(makeSelectPassword()),
  };
  // console.log('submit-req-in-saga-requestedObj', requestedObj);

  Axios({
    method: 'post',
    url: 'http://frontend.interview.dingi.work/user/login/',
    data: requestedObj,
    // headers: {'Content-Type': 'multipart/form-data' }
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded'  }
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => {
      // handle success
      if (response.status === 200) {
        // console.log('token', response.data.jwt_token);
        // console.log(response);
        setToken(JSON.stringify(response.data.jwt_token));
        setAuthenticatedStatus(true);
        window.location.href = '/home_page';
      }
    })
    .catch(response => {
      // handle error
      // console.log(response);
    });
}
// Individual exports for testing
export default function* loginPageSaga() {
  yield takeLatest(SUBMIT_LOGIN, submitLoginForm);
}
