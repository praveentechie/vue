import { coreCommits } from './core.commits';

export const coreActions = {
  UPDATE_USER_INFO: '/core/update/user-info',
  UPDATE_EXPIRATION_TIME: '/core/update/expiration-time'
};

export const actions = {
  async [coreActions.UPDATE_USER_INFO]({commit}, userInfo = {}) {
    commit(coreCommits.UPDATE_USER_INFO, userInfo);
  },
  async [coreActions.UPDATE_EXPIRATION_TIME]({commit}, expirationTime) {
    console.log('expi', new Date(expirationTime));
    commit(coreCommits.UPDATE_EXPIRATION_TIME, expirationTime);
  }
};