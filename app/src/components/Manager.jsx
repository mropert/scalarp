import PropTypes from 'prop-types';
import React from 'react';

import Character from '../model/Character.jsx';

import CharacterInfo from './CharacterInfo.jsx';
import LoginForm from './LoginForm.jsx';
import Home from './Home.jsx';

export default function Manager({ character, nav, navigate, onLogin }) {
  switch (nav) {
    case 'character':
      if (character == null) {
        return <LoginForm onLogin={onLogin} />;
      }
      return <CharacterInfo character={character} />;

    case 'home':
    default:
      return <Home navigate={navigate} />;
  }
}

Manager.propTypes = {
  character: Character.props(),
  nav: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

Manager.defaultProps = {
  character: null,
};
