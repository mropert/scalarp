import PropTypes from 'prop-types';
import React from 'react';

import Character from '../model/Character.jsx';

import CharacterInfo from './CharacterInfo.jsx';
import LoginForm from './LoginForm.jsx';

function Manager(props) {
  if (props.character == null) {
    return <LoginForm onLogin={props.onLogin} />;
  }
  return <CharacterInfo character={props.character} />;
}

Manager.propTypes = {
  character: Character.props(),
  onLogin: PropTypes.func.isRequired,
};

Manager.defaultProps = {
  character: null,
};

module.exports = Manager;
