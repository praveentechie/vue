import UserService from '../../services/user-service';
import UserActions from './user-actions'
import UserCommits from './user-commits';

/**
 * Actions are similar to mutations, the differences being that:
 *  Instead of mutating the state, actions commit mutations.
 *  Actions can contain arbitrary asynchronous operations.
 */
const actions = {
  async [UserActions.GET_ALL]({commit, state}) {
    try {
      let userList = await UserService.getUsers();
      setTimeout(() => {
        commit(UserCommits.GET_ALL_SUCCESS, userList);
      }, 2000);
    } catch (error) {
      commit(UserCommits.GET_ALL_FAILURE, error);
    }
  }
};
/**
 * The only way to actually change state in a Vuex store is by committing a mutation. 
 * Vuex mutations are very similar to events: each mutation has a string `type` and a `handler`.
 */
const mutations = {
  [UserCommits.GET_ALL_SUCCESS](state, data) {
    state.userList = data;
    state.getAllError = null;
  },
  [UserCommits.GET_ALL_FAILURE](state, error) {
    state.getAllError = error;
    state.userList = [];
  }
};
/**
 * the state object must be plain
 */
const state = {
  userList: [],
  getAllError: ''
};

export const user = {
  namespaced: true,
  actions,
  mutations,
  state
};