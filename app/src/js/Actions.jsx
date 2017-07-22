export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const NAVIGATE = 'NAVIGATE';

export function login(character) {
  return { type: LOGIN, character };
}

export function logout() {
  return { type: LOGOUT };
}

export function navigate(dest) {
  return { type: NAVIGATE, nav: dest };
}
