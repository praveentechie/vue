export default [
  {
    path: '/users',
    component: () => import('../views/UserPage.vue'),
    props: {
      name: 'AP router'
    }
  }
];