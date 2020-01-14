import UserPage from '../pages/UserPage.vue';

export default [
  {
    path: '/users',
    component: UserPage,
    props: {
      name: 'Ap router'
    }
  }
];