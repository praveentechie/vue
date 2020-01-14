import Vue from 'vue';
import Vuex from 'vuex';
import {user} from './modules/user/user-store';

Vue.use(Vuex);

let vueStore = new Vuex.Store({
  strict: true // throws error if store if updated by other than commits
});

vueStore.registerModule('user', user);
export const store = vueStore;