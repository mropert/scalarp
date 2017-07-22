import { connect } from 'react-redux';
import { login, navigate } from '../Actions.jsx';
import Manager from '../components/Manager.jsx';

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
    navigate: (dest) => {
      dispatch(navigate(dest));
    },
  };
}

const ReduxManager = connect(mapStateToProps, mapDispatchToProps)(Manager);

export default ReduxManager;
