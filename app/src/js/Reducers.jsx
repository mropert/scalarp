import { LOGIN, LOGOUT, NAVIGATE } from './Actions.jsx';

const initialState = {
  character: null,
  nav: 'home',
};

function scalarpReduce(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { character: action.character });
    case LOGOUT:
      return Object.assign({}, state, { character: null, nav: 'home' });
    case NAVIGATE:
      return Object.assign({}, state, { nav: action.nav });
    default:
      return state;
  }
}

export default scalarpReduce;
