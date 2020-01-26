import Vuex from 'vuex';

export const install = Vue => {
  Vue.use(Vuex);
  return new Vuex.Store({
    strict: true, // throws error if store if updated by other than commits,
    state: {},
    mutations: {},
    actions: {}
  });
};