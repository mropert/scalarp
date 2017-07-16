import PropTypes from 'prop-types';
import React from 'react';

function CharacterInfo({ character }) {
  return (<div>
    <h1>Character sheet</h1>
    <ul>
      <li>Id: #{character.id}</li>
      <li>Name: {character.name}</li>
      <li>Race: {character.race}</li>
      <li>Skills: {character.skills}</li>
    </ul>
  </div>);
}

CharacterInfo.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
  }).isRequired,
};

module.exports = CharacterInfo;
