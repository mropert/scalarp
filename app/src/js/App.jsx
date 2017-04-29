import React from 'react';

import Header from './component/Header.jsx';
import Manager from './component/Manager.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      character: null,
    };
  }

  onLogin(character) {
    this.setState({
      character,
    });
  }

  onLogout() {
    this.setState({
      character: null,
    });
  }

  render() {
    return (<div className="container">
      <Header character={this.state.character} onLogout={e => this.onLogout(e)} />
      <Manager character={this.state.character} onLogin={e => this.onLogin(e)} />
    </div>);
  }
}

module.exports = App;
