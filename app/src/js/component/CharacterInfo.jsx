import React from 'react';

class CharacterInfo extends React.Component {
  render() {
    var char = this.props.character;
    return <div>
            <h1>Character sheet</h1>
            <ul>
              <li>Id: #{char.id}</li>
              <li>Name: {char.name}</li>
              <li>Race: {char.race}</li>
              <li>Skills: {char.skills}</li>
            </ul>
          </div>;
  }
}

module.exports = CharacterInfo;
