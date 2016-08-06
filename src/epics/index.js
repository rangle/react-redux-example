import { Observable } from 'rxjs/Rx';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { REQUEST, SESSION, REDUX_FORM } from '../constants';
import { login } from '../api/auth';
import * as R from 'ramda';

const sessionEpic = R.partial(
  requestSequence,
  [
    SESSION.LOGIN,
    login,
    result => (
      Observable.concat(
        Observable.of({ type: SESSION.LOGIN_SUCCESS, payload: result }),
        Observable.of({ type: REDUX_FORM.RESET, form: 'login' })
      )
    ),
  ]);

const rootEpic = combineEpics(sessionEpic);

export default createEpicMiddleware(rootEpic);

/**
 * Helper for executing a request sequence
 */
function requestSequence(requestType, request, success, action$) {
  return action$.ofType(requestType)
    .mergeMap(({payload}) => {
      return Observable.concat(
        Observable.of({ type: REQUEST.START, payload: { requestType } }),
        makeRequest$(payload, request, success, requestType)
      );
    });
}

function makeRequest$(payload, request, success, requestType) {
  return Observable
    .fromPromise(request(payload))
    .mergeMap(result => {
      return Observable.concat(
        Observable.of({ type: REQUEST.SUCCESS, payload: { requestType } }),
        success(result)
      );
    })
    .catch(error => Observable.of({
      type: REQUEST.ERROR,
      payload: { requestType, error },
      error: true,
    }));
}
