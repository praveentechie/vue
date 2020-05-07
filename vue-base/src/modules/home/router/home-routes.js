export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('../../../views/EventsPage.vue')
  }
];