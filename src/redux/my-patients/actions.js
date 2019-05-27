import {
  GET_ALL_MY_PATIENT,
  GET_ALL_MY_PATIENT_SUCCESS,
  GET_ALL_MY_PATIENT_FAILED,
  RESET_PROPS_STATE
} from 'Constants/actionTypes';

export const getAllMyPatient = () => ({
  type: GET_ALL_MY_PATIENT
});
export const getAllMyPatientSuccess = myPatients => ({
  type: GET_ALL_MY_PATIENT_SUCCESS,
  payload: myPatients
});
export const getAllMyPatientFailed = error => ({
  type: GET_ALL_MY_PATIENT_FAILED,
  payload: error
});
export const resetAuthPropsState = () => ({
  type: RESET_PROPS_STATE
});
