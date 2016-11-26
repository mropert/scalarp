import React from 'react';

class CharacterInfo extends React.Component {
  render() {
    const char = this.props.character;
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
}

CharacterInfo.propTypes = {
  character: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    race: React.PropTypes.string.isRequired,
    skills: React.PropTypes.string.isRequired,
  }).isRequired,
};

module.exports = CharacterInfo;
