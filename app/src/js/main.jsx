import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import App from './App.jsx';
import scalarpReduce from './Reducers.jsx';

const store = createStore(scalarpReduce, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('content'),
);
