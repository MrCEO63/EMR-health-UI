import { combineReducers } from 'redux';
import authUser from './auth/reducer';
import dashboardReducers from './dashboard/reducer';
import myPatientsReducers from './my-patients/reducer';

const reducers = combineReducers({
  authUser,
  dashboardReducers,
  myPatientsReducers
});

export default reducers;
