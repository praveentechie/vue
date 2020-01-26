export default [
  {
    path: '/users',
    component: () => import('../pages/UserPage.vue'),
    props: {
      name: 'Ap router'
    }
  }
];