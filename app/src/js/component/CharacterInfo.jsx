import PropTypes from 'prop-types';
import React from 'react';

function CharacterInfo(props) {
  const char = props.character;
  return (<div>
    <h1>Character sheet</h1>
    <ul>
      <li>Id: #{char.id}</li>
      <li>Name: {char.name}</li>
      <li>Race: {char.race}</li>
      <li>Skills: {char.skills}</li>
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
