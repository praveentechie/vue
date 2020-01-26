export default [
  {
    path: '/',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/events',
    component: () => import('../../../views/EventsPage.vue')
  }
];