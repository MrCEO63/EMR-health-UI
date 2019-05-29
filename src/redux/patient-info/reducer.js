import {
  GET_PATIENT_INFO,
  GET_PATIENT_INFO_SUCCESS,
  GET_PATIENT_INFO_FAILED,
  RESET_PROPS_STATE
} from 'Constants/actionTypes';

const INIT_STATE = {
  data: [],
  loading: false,
  error: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case RESET_PROPS_STATE:
      return { ...state, error: null };
    case GET_PATIENT_INFO:
      return { ...state, loading: true };
    case GET_PATIENT_INFO_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_PATIENT_INFO_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
