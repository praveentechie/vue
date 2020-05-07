import restClient from "../_core/utils/rest-client";

async function loginUser(payload) {
  return await restClient({
    method: 'POST',
    requestUrl: '/v1/auth/login',
    body: payload
  });
}

async function logoutUser() {
  return await restClient({
    method: 'POST',
    requestUrl: '/v1/auth/logout'
  });
}

export default {
  loginUser,
  logoutUser
};