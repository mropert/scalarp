import React from 'react';

import ReduxHeader from './container/ReduxHeader.jsx';
import ReduxManager from './container/ReduxManager.jsx';

function App() {
  return (<div className="container">
    <ReduxHeader />
    <ReduxManager />
  </div>);
}

module.exports = App;
