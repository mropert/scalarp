import PropTypes from 'prop-types';

class Login {
  static props() {
    return PropTypes.shape({
      error: PropTypes.string,
      onLogin: PropTypes.func.isRequired,
    });
  }
}

module.exports = Login;
