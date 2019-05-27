import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { LOGIN_USER, LOGOUT_USER } from 'Constants/actionTypes';

import { loginUserSuccess, loginUserFailed, logoutUserSuccess } from './actions';

function* login({ payload }) {
  const { username, password } = payload.user;
  const { history } = payload;
  if (username === 'demo@gmail.com') {
    if (password === '123456') {
      yield put(loginUserSuccess(username));
      localStorage.setItem('authUser', username);
      history.push(`/app/dashboard`);
    } else {
      yield put(loginUserFailed('Incorrect Password'));
    }
  } else {
    yield put(loginUserFailed('Incorrect Username'));
  }
}

function* logout({ payload }) {
  const { history } = payload;
  yield put(logoutUserSuccess());
  localStorage.removeItem('authUser');
  history.push('/login');
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, login);
}

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER, logout);
}

export default function* rootSaga() {
  yield all([fork(watchLoginUser), fork(watchLogoutUser)]);
}
