export function getToken() {
  return localStorage.getItem('token');
}

export function setToken(token) {
  return localStorage.setItem('token', token);
}

export function setAuthenticatedStatus(status) {
  return localStorage.setItem('isAuthenticated', status);
}

export function getAuthenticatedStatus() {
  return localStorage.getItem('isAuthenticated');
}
