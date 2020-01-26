import App from './App.vue';

export const install = (Vue, router, store) => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
};