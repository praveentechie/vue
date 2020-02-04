//third party libraries
import Vue from 'vue';
//project specific imports
import { routerInstall } from './modules/_router';
import { coreInstall } from './modules/_core';
import { storeInstall } from './modules/_store';
import { install as homeInstall } from './modules/home';
import { install as userInstall } from './modules/user';

console.log('process.env.node_env', process.env.NODE_ENV);

const router = routerInstall(Vue);
const store = storeInstall(Vue);
homeInstall(router, store);
userInstall(router, store);
coreInstall(Vue, router, store);