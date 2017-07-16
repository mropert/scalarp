import { connect } from 'react-redux';
import { login, logout, navigate } from '../Actions.jsx';
import Manager from '../component/Manager.jsx';

function mapStateToProps(state) {
  return {
    character: state.character,
    nav: state.nav,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (char) => {
      dispatch(login(char));
    },
    onLogout: () => {
      dispatch(logout);
    },
    navigate: (dest) => {
      dispatch(navigate(dest));
    },
  };
}

const ReduxManager = connect(mapStateToProps, mapDispatchToProps)(Manager);

export default ReduxManager;
