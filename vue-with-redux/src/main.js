import Vue from 'vue';
import App from './App.vue'

import { createStore } from "redux";
import { connect } from "redux-vuex";

import RootReducer from './reducers';

const store = createStore(RootReducer);

connect({
  Vue,
  store
});

new Vue({
  render: h => h(App),
}).$mount('#app')

let res = {
  type: <native_constructors>,
  default: <any>,
  required: Boolean,
  validator: () => {}
}