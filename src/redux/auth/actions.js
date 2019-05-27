import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  RESET_PROPS_STATE
} from 'Constants/actionTypes';

export const loginUser = (user, history) => ({
  type: LOGIN_USER,
  payload: { user, history }
});
export const loginUserSuccess = user => ({
  type: LOGIN_USER_SUCCESS,
  payload: user
});
export const loginUserFailed = error => ({
  type: LOGIN_USER_FAILED,
  payload: error
});
export const logoutUser = history => ({
  type: LOGOUT_USER,
  payload: { history }
});
export const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS
});
export const resetAuthPropsState = () => ({
  type: RESET_PROPS_STATE
});
