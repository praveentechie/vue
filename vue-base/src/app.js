//third party libraries
import Vue from 'vue';
//project specific imports
import { routerInstall }            from './modules/_router';
import { coreInstall }              from './modules/_core';
import { storeInstall }             from './modules/_store';
import { install as homeInstall }   from './modules/home';
import { install as userInstall }   from './modules/user';
import { install as loginInstall }  from './modules/login';

import { devKeys, setStorageValue } from './modules/_core/utils/storage-utils';

console.log('process.env.node_env', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  window.setMutationLogs = (flag) => {
    setStorageValue(devKeys.MUTATION_LOGS, flag);
  };  
}

const router = routerInstall(Vue);
const store = storeInstall(Vue);

loginInstall(router, store);
homeInstall(router, store);
userInstall(router, store);
coreInstall(Vue, router, store);