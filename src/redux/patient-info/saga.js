import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { GET_PATIENT_INFO } from 'Constants/actionTypes';

import { getPatientInfoSuccess, getPatientInfoFailed } from './actions';

import data from 'Data/patientData.json';

function* getPatientInfo() {
  if (data) {
    yield put(getPatientInfoSuccess(data));
  } else {
    yield put(getPatientInfoFailed('Error while fetch patients.'));
  }
}

export function* watchGetPatientInfo() {
  yield takeEvery(GET_PATIENT_INFO, getPatientInfo);
}

export default function* rootSaga() {
  yield all([fork(watchGetPatientInfo)]);
}
