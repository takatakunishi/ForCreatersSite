import { LOGIN_REQUEST,  LOGIN_SUCCESS, LOGIN_FAILED } from "./ActionType"

export const loginRequest = (data) => ({
  type: LOGIN_REQUEST,
  data
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  data
})

export const loginFailed = (data) => ({
 type: LOGIN_FAILED,
 data
})
