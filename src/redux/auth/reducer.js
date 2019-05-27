import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  RESET_PROPS_STATE
} from 'Constants/actionTypes';

const INIT_STATE = {
  user: localStorage.getItem('authUser'),
  loading: false,
  error: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case RESET_PROPS_STATE:
      return { ...state, error: null };
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case LOGIN_USER_FAILED:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT_USER:
      return { ...state, loading: true };
    case LOGOUT_USER_SUCCESS:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};
