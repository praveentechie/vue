import HomePage from '../pages/HomePage.vue';
import EventsPage from '../pages/EventsPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import userRoutes from './user-routes';

export default [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/events',
    component: EventsPage
  },
  ...userRoutes,
  {
    path: '*',
    component: NotFoundPage
  }
];