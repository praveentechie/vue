import {user as userStore} from './store/user-store';

export const install = (router, store) => {
  const USER_ROUTES = [
    {
      path: '/users',
      component: () => import('./views/UserPage.vue'),
      props: {
        name: 'AP'
      }
    }
  ];
  router.addRoutes(USER_ROUTES);
  store.registerModule('user', userStore);
}