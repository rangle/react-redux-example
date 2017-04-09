import { login } from '../api/auth/';

import {
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  FORM_RESET
} from '../constants';

export function loginUser() {
  return (dispatch, getState) => {
    const user = {
      username: getState().form.login.username.value,
      password: getState().form.login.password.value
    };

    return dispatch({
      types: [
        LOGIN_USER_PENDING,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_ERROR
      ],
      payload: {
        promise: login(user)
          .then((res) => {
            dispatch({
              type: FORM_RESET,
              form: 'login'
            });

            return res;
          })
      }
    });
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  };
}
