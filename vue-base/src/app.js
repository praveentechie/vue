//third party libraries
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router'
//project specific imports
import App from './App.vue';
import routes from './routers';
import {store} from './store';
import './components/initComponents';
import './styles/app.scss';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({routes});
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})