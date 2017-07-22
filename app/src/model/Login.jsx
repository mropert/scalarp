import PropTypes from 'prop-types';

export default class Login {
  static props() {
    return PropTypes.shape({
      error: PropTypes.string,
      onLogin: PropTypes.func.isRequired,
    });
  }
}
