import { combineReducers } from 'redux';
import authUser from './auth/reducer';
import dashboardReducers from './dashboard/reducer';
import myPatientsReducers from './my-patients/reducer';
import patientInfoReducers from './patient-info/reducer';

const reducers = combineReducers({
  authUser,
  dashboardReducers,
  myPatientsReducers,
  patientInfoReducers
});

export default reducers;
