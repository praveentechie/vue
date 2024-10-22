export default [
  {
    path: '/login',
    props: { provider: '', token: '', userName: '' },
    name: 'login',
    component: () => import('./views/LoginPage.vue'),
    /**
     * ### vue-router: before enter a route guard
     */
    beforeEnter: (to, from, next) => {
      console.log('router - before enter route guard');
      console.log('to ', to, from);
      next();
    }
  }
]