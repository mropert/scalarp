import { LOGIN, LOGOUT, NAVIGATE } from './Actions.jsx';

export function initialState() {
  return {
    character: null,
    nav: 'home',
  };
}

export function scalarpReduce(state, action) {
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
