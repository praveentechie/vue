import VueRouter from 'vue-router';

export const install = (Vue) => {
  Vue.use(VueRouter);
  return new VueRouter({
    base: '/#',
    routes: [
      {
        path: '*',
        component: () => import('../_core/views/NotFoundPage.vue')
      }
    ]
  });
}