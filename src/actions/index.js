import { COUNTER, REQUEST, SESSION } from '../constants';

/**
 * Counter Actions
 */
function increment() {
  return {
    type: COUNTER.INCREMENT,
  };
}

function decrement() {
  return {
    type: COUNTER.DECREMENT,
  };
}

export const counterActions = { increment, decrement };

/**
 * Session Actions
 */
export function login(payload) {
  return {
    type: SESSION.LOGIN,
    payload,
  };
}

export function logout() {
  return { type: SESSION.LOGOUT };
}

export const sessionActions = { login, logout };

/**
 * Request Actions
 */
export function requestOnStart(requestType) {
  return {
    type: REQUEST.START,
    payload: { requestType },
  };
}

export function requestOnSuccess(payload, requestType) {
  return {
    type: REQUEST.SUCCESS,
    payload: { requestType },
  };
}

export function requestOnError(error, requestType) {
  return {
    type: REQUEST.ERROR,
    payload: { requestType, error },
  };
}

export const requestActions = {
  requestOnStart,
  requestOnSuccess,
  requestOnError,
};
