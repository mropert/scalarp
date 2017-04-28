import PropTypes from 'prop-types';
import React from 'react';
import { Alert, Button, ControlLabel, FormControl, FormGroup, HelpBlock, Panel } from 'react-bootstrap';

function isValid(login) {
  return login.match(/^[0-9A-Fa-f]{8}$/);
}

function LoginError(props) {
  if (props.msg != null) {
    return <Alert bsStyle="warning"><strong>Login error:</strong> {props.msg}</Alert>;
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
      value: '',
      onLogin: props.onLogin,
    };
  }

  onSubmit(e) {
    if (isValid(this.state.value)) {
      this.state.onLogin(this.state.value);
    }
    e.preventDefault();
  }

  getValidationState() {
    const length = this.state.value.length;
    if (isValid(this.state.value)) return 'success';
    if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <Panel>
          <LoginError msg={this.props.error} />
          <form onSubmit={this.onSubmit.bind(this)} >
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
  error: PropTypes.string,
  onLogin: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  error: null,
};

module.exports = LoginForm;
