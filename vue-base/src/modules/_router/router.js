import VueRouter    from 'vue-router';
import { isEmpty }  from 'lodash';
import { storageKeys, getStorageValue } from '../_core/utils/storage-utils';

export const install = (Vue) => {
  Vue.use(VueRouter);
  const router = new VueRouter({
    base: '/#',
    routes: [
      {
        path: '*',
        component: () => import('../_core/views/NotFoundPage.vue')
      }
    ]
  });
  /**
   * ### vue-router: global before guard. will render only if next is called else nothing renders
   * make sure that next is being called only once
   */
  router.beforeEach((to, from, next) => {
    let userContext = JSON.parse(getStorageValue(storageKeys.USER_CONTEXT));
    console.log('userContext', userContext);
    try {
      console.log('route global before guard');
      if (to.name !== 'login' && isEmpty(userContext)) {
        next({ name: 'login' });
      } else if (to.name === 'login' && !isEmpty(userContext)) {
        console.log('got to gome');
        next({ name: 'home' });
      } else {
        next();
      }  
    } catch(error) {
      console.log('route navigation failed ', error);
    }
  });

  return router;
}