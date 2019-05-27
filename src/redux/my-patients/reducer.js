import {
  GET_ALL_MY_PATIENT,
  GET_ALL_MY_PATIENT_SUCCESS,
  GET_ALL_MY_PATIENT_FAILED,
  RESET_PROPS_STATE
} from 'Constants/actionTypes';

const INIT_STATE = {
  myPatients: [],
  loading: false,
  error: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case RESET_PROPS_STATE:
      return { ...state, error: null };
    case GET_ALL_MY_PATIENT:
      return { ...state, loading: true };
    case GET_ALL_MY_PATIENT_SUCCESS:
      return { ...state, loading: false, myPatients: action.payload };
    case GET_ALL_MY_PATIENT_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
