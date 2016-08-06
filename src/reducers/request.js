import { fromJS } from 'immutable';
import { REQUEST } from '../constants';

const defaultState = fromJS({
  waiting: {},
  errors: {},
});

export default function reducer(state = defaultState, { payload, type } = {}) {
  switch (type) {
    case REQUEST.START:
      return state.setIn(['waiting', payload.requestType], true);

    case REQUEST.SUCCESS:
      return state.setIn(['waiting', payload.requestType], false)
                  .setIn(['errors', payload.requestType], undefined);

    case REQUEST.ERROR:
      return state.setIn(
        ['errors', payload.requestType],
        fromJS(payload.error)
      )
      .setIn(['waiting', payload.requestType], false);

    default:
      return state;
  }
}
