import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import dashboardSagas from './dashboard/saga';
import myPatientsSagas from './my-patients/saga';
import patientInfoSagas from './patient-info/saga';

export default function* rootSaga(getState) {
  yield all([authSagas(), dashboardSagas(), myPatientsSagas(), patientInfoSagas()]);
}
