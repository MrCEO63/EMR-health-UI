import {
  GET_PATIENT_INFO,
  GET_PATIENT_INFO_SUCCESS,
  GET_PATIENT_INFO_FAILED,
  RESET_PROPS_STATE
} from 'Constants/actionTypes';

export const getPatientInfo = id => ({
  type: GET_PATIENT_INFO,
  payload: id
});
export const getPatientInfoSuccess = data => ({
  type: GET_PATIENT_INFO_SUCCESS,
  payload: data
});
export const getPatientInfoFailed = error => ({
  type: GET_PATIENT_INFO_FAILED,
  payload: error
});
export const resetAuthPropsState = () => ({
  type: RESET_PROPS_STATE
});
