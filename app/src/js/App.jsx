import React from 'react';

import Header from './component/Header.jsx';
import Manager from './component/Manager.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      character: null,
      module: 'home',
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
      module: 'home',
    });
  }

  navigate(module) {
    this.setState({
      module,
    });
  }

  render() {
    return (<div className="container">
      <Header
        character={this.state.character}
        navigate={e => this.navigate(e)}
        onLogout={e => this.onLogout(e)}
      />
      <Manager
        character={this.state.character}
        module={this.state.module}
        navigate={e => this.navigate(e)}
        onLogin={e => this.onLogin(e)}
      />
    </div>);
  }
}

module.exports = App;
