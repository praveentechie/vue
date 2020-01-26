function getUsers() {
  return fetch('http://localhost:4040/users/all')
  .then(response => response.json());    // one extra step
}

export default {
  getUsers
};