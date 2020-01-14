import HomePage from '../pages/HomePage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import userRoutes from './user-routes';

export default [
  {
    path: '/',
    component: HomePage
  },
  ...userRoutes,
  {
    path: '*',
    component: NotFoundPage
  }
];