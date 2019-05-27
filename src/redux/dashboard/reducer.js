import {
  GET_ALL_APPOINTMENT,
  GET_ALL_APPOINTMENT_SUCCESS,
  GET_ALL_APPOINTMENT_FAILED,
  GET_ALL_NOTIFICATION,
  GET_ALL_NOTIFICATION_SUCCESS,
  GET_ALL_NOTIFICATION_FAILED,
  RESET_PROPS_STATE
} from 'Constants/actionTypes';

const INIT_STATE = {
  appointments: [],
  notifications: [],
  loading: false,
  error: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case RESET_PROPS_STATE:
      return { ...state, error: null };
    case GET_ALL_APPOINTMENT:
      return { ...state, loading: true };
    case GET_ALL_APPOINTMENT_SUCCESS:
      return { ...state, loading: false, appointments: action.payload };
    case GET_ALL_APPOINTMENT_FAILED:
      return { ...state, loading: false, error: action.payload };
    case GET_ALL_NOTIFICATION:
      return { ...state, loading: true };
    case GET_ALL_NOTIFICATION_SUCCESS:
      return { ...state, loading: false, notifications: action.payload };
    case GET_ALL_NOTIFICATION_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
