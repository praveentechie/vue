import HomeRoutes from './router/home-routes';

export const install = (router, store) => {
  router.addRoutes(HomeRoutes);
};