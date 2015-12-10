import './styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import configureStore from './store/configureStore';

const store = configureStore({});

ReactDOM.render(
  <div>
    <Provider store={ store }>
      <ReduxRouter />
    </Provider>
  </div>,
  document.getElementById('root')
);
