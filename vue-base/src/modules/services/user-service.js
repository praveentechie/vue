function getUsers() {
  return fetch('http://localhost:4040/users')
  .then(response => response.json());    // one extra step
}

function getUserInfo(userId) {
  return fetch(`http://localhost:4040/users/${userId}`)
  .then(response => response.json());    // one extra step
}

export default {
  getUsers,
  getUserInfo
};