import PropTypes from 'prop-types';
import React from 'react';
import { Alert, Button, ControlLabel, FormControl, FormGroup, HelpBlock, Panel } from 'react-bootstrap';

import Character from '../model/Character.jsx';

function isValid(login) {
  return login.match(/^[0-9A-Fa-f]{8}$/);
}

function LoginError({ msg }) {
  if (msg != null) {
    return <Alert bsStyle="warning"><strong>Login error:</strong> {msg}</Alert>;
  }
  return null;
}

LoginError.propTypes = {
  msg: PropTypes.string,
};

LoginError.defaultProps = {
  msg: null,
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterId: '',
      error: null,
      onLogin: props.onLogin,
    };
  }

  onSubmit(e) {
    if (isValid(this.state.characterId)) {
      const character = Character.get(this.state.characterId);
      if (character != null) {
        this.state.onLogin(character);
      } else {
        this.setState({
          error: 'Invalid character ID',
        });
      }
    }
    e.preventDefault();
  }

  getValidationState() {
    const length = this.state.characterId.length;
    if (isValid(this.state.characterId)) return 'success';
    if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ characterId: e.target.value });
  }

  render() {
    return (
      <div>
        <Panel>
          <LoginError msg={this.state.error} />
          <form onSubmit={e => this.onSubmit(e)} >
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            >
              <ControlLabel>Enter your character ID</ControlLabel>
              <FormControl
                type="text"
                value={this.state.characterId}
                placeholder="Enter text"
                onChange={e => this.handleChange(e)}
              />
              <FormControl.Feedback />
              <HelpBlock>A character ID is 8 character long, containing only digits and letters
                from A to F</HelpBlock>
            </FormGroup>
            <Button type="submit">
              Authenticate
            </Button>
          </form>
        </Panel>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

module.exports = LoginForm;
