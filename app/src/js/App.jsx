import React from 'react';
import { PageHeader } from 'react-bootstrap';

import Manager from './component/Manager.jsx';

class App extends React.Component {
  render() {
    return <div>
            <PageHeader>Scalable LARP Manager</PageHeader>
            <Manager/>
           </div>;
  }
}

module.exports = App;
