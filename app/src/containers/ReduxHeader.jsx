import { connect } from 'react-redux';
import { logout, navigate } from '../Actions.jsx';
import Header from '../components/Header.jsx';

function mapStateToProps(state) {
  return {
    character: state.character,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => {
      dispatch(logout());
    },
    navigateHome: () => {
      dispatch(navigate('home'));
    },
  };
}

const ReduxHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default ReduxHeader;
