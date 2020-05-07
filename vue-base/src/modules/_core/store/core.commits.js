export const coreCommits = {
  UPDATE_USER_INFO: '/core/update/user-info',
  UPDATE_EXPIRATION_TIME: '/core/update/expiration-time'
};

export const mutations = {
  [coreCommits.UPDATE_USER_INFO](state, userInfo) {
    state.userContext = userInfo;
  },
  [coreCommits.UPDATE_EXPIRATION_TIME](state, expirationTime) {
    state.userContext = {
      ...state.userContext,
      expirationTime
    };
  }
};