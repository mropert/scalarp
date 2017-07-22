import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { initialState, scalarpReduce } from './Reducers.jsx';
import ReduxHeader from './containers/ReduxHeader.jsx';
import ReduxManager from './containers/ReduxManager.jsx';

const store = createStore(scalarpReduce, initialState(), devToolsEnhancer());

export default function App() {
  return (<Provider store={store}>
    <div className="container">
      <ReduxHeader />
      <ReduxManager />
    </div>
  </Provider>);
}
