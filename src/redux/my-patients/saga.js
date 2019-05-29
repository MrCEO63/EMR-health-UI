import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { GET_ALL_MY_PATIENT } from 'Constants/actionTypes';

import { getAllMyPatientSuccess, getAllMyPatientFailed } from './actions';

import patients from 'Data/patientList.json';

function* getAllMyPatient() {
  if (patients) {
    yield put(getAllMyPatientSuccess(patients));
  } else {
    yield put(getAllMyPatientFailed('Error while fetch patients.'));
  }
}

export function* watchGetAllMyPatient() {
  yield takeEvery(GET_ALL_MY_PATIENT, getAllMyPatient);
}

export default function* rootSaga() {
  yield all([fork(watchGetAllMyPatient)]);
}
