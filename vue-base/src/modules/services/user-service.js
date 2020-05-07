import restClient     from "../_core/utils/rest-client";

const saveUser = async(userInfo) => {
  console.log('userInfo--service', userInfo);
  return await restClient({
    method: 'POST',
    requestUrl: '/v1/users',
    body: userInfo
  });
}

const getUsers = async() => {
  return await restClient({
    requestUrl: '/v1/users'
  });
}

const getUserInfo = async(userId) => {
  return await restClient({
    requestUrl: `/v1/users/${userId}`
  });
}

export default {
  saveUser,
  getUsers,
  getUserInfo
};