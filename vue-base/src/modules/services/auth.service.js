import { initRestClient } from '@praveentechie/ui-core';

const restClient = initRestClient('http', 'localhost');

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

async function validateProviderLogin(provider, token, userName) {
  return await restClient({
    method: 'POST',
    requestUrl: '/v1/auth/social-login/validate',
    body: {provider, token, userName}
  });
}

export default {
  loginUser,
  logoutUser,
  validateProviderLogin
};