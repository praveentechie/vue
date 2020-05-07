// import { user as userStore } from './store/user-store';
import LoginRoutes            from './login.routes';

export const install = (router, store) => {
  router.addRoutes(LoginRoutes);
  // store.registerModule('user', userStore);
}