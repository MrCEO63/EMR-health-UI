import {
  GET_ALL_APPOINTMENT,
  GET_ALL_APPOINTMENT_SUCCESS,
  GET_ALL_APPOINTMENT_FAILED,
  GET_ALL_NOTIFICATION,
  GET_ALL_NOTIFICATION_SUCCESS,
  GET_ALL_NOTIFICATION_FAILED,
  RESET_PROPS_STATE
} from 'Constants/actionTypes';

export const getAllAppiontment = () => ({
  type: GET_ALL_APPOINTMENT
});
export const getAllAppiontmentSuccess = appointment => ({
  type: GET_ALL_APPOINTMENT_SUCCESS,
  payload: appointment
});
export const getAllAppiontmentFailed = error => ({
  type: GET_ALL_APPOINTMENT_FAILED,
  payload: error
});
export const getAllNotification = () => ({
  type: GET_ALL_NOTIFICATION
});
export const getAllNotificationSuccess = notification => ({
  type: GET_ALL_NOTIFICATION_SUCCESS,
  payload: notification
});
export const getAllNotificationFailed = error => ({
  type: GET_ALL_NOTIFICATION_FAILED,
  payload: error
});
export const resetAuthPropsState = () => ({
  type: RESET_PROPS_STATE
});
