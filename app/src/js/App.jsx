import React from 'react';
import { PageHeader } from 'react-bootstrap';

import Manager from './component/Manager.jsx';

function App() {
  return (<div className="container">
    <PageHeader>Scalable LARP Manager</PageHeader>
    <Manager />
  </div>);
}

module.exports = App;
