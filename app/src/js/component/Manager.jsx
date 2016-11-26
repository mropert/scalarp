import React from 'react';

import Character from '../model/Character.jsx';
import CharacterInfo from './CharacterInfo.jsx';
import LoginForm from './LoginForm.jsx';

class Manager extends React.Component {
  constructor() {
    super();
    this.state = {
      character: null,
    };
  }

  onLogin(charId) {
    const character = Character.get(charId);
    if (character != null) {
      this.setState({
        character,
      });
    } else {
      this.setState({
        character: null,
        error: 'Invalid character ID',
      });
    }
  }

  render() {
    if (this.state.character == null) {
      return <LoginForm onLogin={this.onLogin.bind(this)} error={this.state.error} />;
    }
    return <CharacterInfo character={this.state.character} />;
  }
}

module.exports = Manager;
