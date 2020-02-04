import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import { install as globalComponentsInstall } from './components/initComponents';
import 'bootstrap/dist/css/bootstrap.min.css';

export const install = (Vue, router, store) => {
  Vue.use(BootstrapVue);
  globalComponentsInstall();
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
};