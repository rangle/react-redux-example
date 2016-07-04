import 'es5-shim';
import 'es6-shim';
import 'es6-promise';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './store/routes';
import configureStore from './store/configure-store';

import './styles/index.css';

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

if (!__TEST__) {
  ReactDOM.render(
    <div>
      <Provider store={ store }>
        <Router history={ history }>
          { routes }
        </Router>
      </Provider>
    </div>,
    document.getElementById('root')
  );
}
