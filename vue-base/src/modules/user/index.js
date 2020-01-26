import { user as userStore } from './store/user-store';
import UserRoutes from './router/user-routes';

export const install = (router, store) => {
  router.addRoutes(UserRoutes);
  store.registerModule('user', userStore);
}