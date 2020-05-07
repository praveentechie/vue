import Vuex from 'vuex';
import { devKeys, getStorageValue } from '../_core/utils/storage-utils';

export const install = Vue => {
  Vue.use(Vuex);
  const store = new Vuex.Store({
    strict: true, // ### vuex: strict - throws error if store if updated by other than commits,
    state: {},
    mutations: {},
    actions: {}
  });
  /**
   * ### vuex: subscribe to all mutations happens to store
   */
  store.subscribe((mutation, state) => {
    if (process.env.NODE_ENV === 'development' && getStorageValue(devKeys.MUTATION_LOGS)) {
      console.log('mutation ', mutation, 'state ', state);
    }
  });
  return store;
};