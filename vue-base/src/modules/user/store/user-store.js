import UserService from '../../services/user-service';
import UserActions from './user-actions'
import UserCommits from './user-commits';

/**
 * Actions are similar to mutations, the differences being that:
 * Instead of mutating the state, actions commit mutations.
 * Actions can contain arbitrary asynchronous operations.
 */
const actions = {
  async [UserActions.GET_ALL]({commit}) {
    try {
      commit(UserCommits.GET_ALL_START);
      let userList = await UserService.getUsers();
      setTimeout(() => {
        commit(UserCommits.GET_ALL_SUCCESS, userList);
      }, 2000);
    } catch (error) {
      commit(UserCommits.GET_ALL_FAILURE, error);
    }
  },
  async [UserActions.UPDATE_USER_FORM]({commit}, param) {
    commit(UserCommits.USER_FORM_UPDATED, param);
  },
  async [UserActions.SAVE_USER]({commit, state}, userInfo) {
    try {
      let response = await UserService.saveUser(userInfo);
      commit(UserCommits.USER_FORM_RESET);
      commit(UserCommits.GET_ALL_SUCCESS, [...state.userList, response]);
    } catch(error) {
      console.log('err', error);
    }
  }
};
/**
 * The only way to actually change state in a Vuex store is by committing a mutation. 
 * Vuex mutations are very similar to events: each mutation has a string `type` and a `handler`.
 */
const mutations = {
  [UserCommits.GET_ALL_START](state) {
    state.fetchingUsers = true;
  },
  [UserCommits.GET_ALL_SUCCESS](state, data) {
    state.userList = data;
    state.getUsersError = null;
    state.fetchingUsers = false;
  },
  [UserCommits.GET_ALL_FAILURE](state, error) {
    state.getUsersError = error;
    state.userList = [];
    state.fetchingUsers = false;
  },
  [UserCommits.USER_FORM_UPDATED](state, userInfo) {
    state.userInfo = {
      ...state.userInfo,
      ...userInfo
    };
  },
  [UserCommits.USER_FORM_RESET](state) {
    state.userInfo = {};
  }
};
/**
 * the state object must be plain
 */
const state = {
  userList: [],
  getUsersError: '',
  fetchingUsers: false,
  userInfo: {}
};

export const user = {
  namespaced: true,
  actions,
  mutations,
  state
};