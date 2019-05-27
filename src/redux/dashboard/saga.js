import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { GET_ALL_APPOINTMENT, GET_ALL_NOTIFICATION } from 'Constants/actionTypes';

import {
  getAllAppiontmentSuccess,
  getAllAppiontmentFailed,
  getAllNotificationSuccess,
  getAllNotificationFailed
} from './actions';

import appointments from 'Data/appointmentList.json';
import notifications from 'Data/notifications.json';

function* getAllAppiontment() {
  if (appointments) {
    yield put(getAllAppiontmentSuccess(appointments));
  } else {
    yield put(getAllAppiontmentFailed('Error while fetch appointment.'));
  }
}

function* getAllNotification() {
  if (notifications) {
    yield put(getAllNotificationSuccess(notifications));
  } else {
    yield put(getAllNotificationFailed('Error while fetch appointment.'));
  }
}

export function* watchGetAllAppiontment() {
  yield takeEvery(GET_ALL_APPOINTMENT, getAllAppiontment);
}

export function* watchgetAllNotification() {
  yield takeEvery(GET_ALL_NOTIFICATION, getAllNotification);
}

export default function* rootSaga() {
  yield all([fork(watchGetAllAppiontment), fork(watchgetAllNotification)]);
}
