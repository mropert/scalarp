import React from 'react';
import { Alert, ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';

function isValid(login) {
  return login.match(/^[0-9A-Fa-f]{8}$/);
}

function LoginError(props) {
  if (props.msg != null)
    return <Alert bsStyle="warning"><strong>Login error:</strong> {props.msg}</Alert>;
  else
    return null;
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      onLogin: props.onLogin,
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (isValid(this.state.value)) return 'success';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  onSubmit(e) {
    if (isValid(this.state.value))
      this.state.onLogin(this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <LoginError msg={this.props.error}/>
        <form onSubmit={this.onSubmit.bind(this)}>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Enter your character ID</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange.bind(this)}
            />
            <FormControl.Feedback />
            <HelpBlock>A character ID is 8 character long, containing only digits and letters from A to F</HelpBlock>
          </FormGroup>
        </form>
      </div>
    );
  }
}

module.exports = LoginForm;
