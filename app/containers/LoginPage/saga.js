import { select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
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

  axios({
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
        setAuthenticatedStatus(true);
        setToken(JSON.stringify(response.data.jwt_token));
        window.location.href = '';
      }
    })
    .catch(error => {
      // handle error
      console.log('catch', error.Error);
      if (error.response) {
        
        console.log('in-err-res');
        if (error.response.status == 401) {
          console.log('userName or password invalid');
        }
        // client received an error response (5xx, 4xx)
      } else if (error.request) {
        console.log('in-err-req', 'network connection error.');

        // client never received a response, or request never left
      } else {
        console.log('in-err-else', 'something went wrong. try again later.');

        // anything else
      }

    });
}
// Individual exports for testing
export default function* loginPageSaga() {
  yield takeLatest(SUBMIT_LOGIN, submitLoginForm);
}
