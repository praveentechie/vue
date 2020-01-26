import App from './App.vue';
import { install as globalComponentsInstall } from './components/initComponents';

export const install = (Vue, router, store) => {
  globalComponentsInstall();
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
};