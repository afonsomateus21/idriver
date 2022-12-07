export function checkLoggedIn() {
  let token = localStorage.getItem('token');

  if (token !== null && token !== '') {
    return true
  } else {
    return false;
  }
}