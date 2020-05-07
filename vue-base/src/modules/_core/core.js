import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import { core as coreStore } from './store/core.store';
import { storageKeys, setStorageValue } from './utils/storage-utils';
import { install as globalComponentsInstall } from './components/initComponents';
import EventEmitter from './utils/event-emitter';
import 'bootstrap/dist/css/bootstrap.min.css';

export const install = (Vue, router, store) => {
  store.registerModule('core', coreStore);

  Vue.use(BootstrapVue);
  globalComponentsInstall();

  let vueInstance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');

  initStoreWatchers(store);
  return vueInstance;
};
/**
 * ### vuex: watch store value - watch changes in specific store value
 * @param {Store} store 
 */
function initStoreWatchers(store) {
  store.watch(
    (state, getters) => {
      return [state.core.userContext];
    },
    watched => {
      console.log("watching user context: ", watched[0]);
      clearCountdownTimer();
      setStorageValue(storageKeys.USER_CONTEXT, JSON.stringify(watched[0]));
      setSessionTimeout(watched[0].expirationTime);
    },
    {}
  );
}
/**
 * set timeout to session
 */
function setSessionTimeout(expirationTime) {
  window.timerKey = Symbol('AP:timeout');
  window.intervalKey = Symbol('AP:interval');

  if (expirationTime) {
    let countDownInSeconds = 20;
    let timeToSessionEnd = (new Date(expirationTime).getTime() - new Date().getTime()) - (countDownInSeconds * 1000);
    if (timeToSessionEnd > 0) {
      let timerReference = setTimeout(() => {
        window[window.intervalKey] = setInterval(() => {
          console.log('set inter ', countDownInSeconds);
          countDownInSeconds = --countDownInSeconds;
          if (countDownInSeconds < 0) {

            clearInterval(window[window.intervalKey]);
          }
          EventEmitter.emit('runTimer', countDownInSeconds);
        }, 1000)    
      }, timeToSessionEnd);
      window[window.timerKey] = timerReference;
    }
  }
}

function clearCountdownTimer() {
  console.log('window[window.timerKey]', window[window.intervalKey], window[window.timerKey]);
  if (window[window.timerKey] != null || window[window.timerKey] != undefined) {
    console.log('clearing timeout');
    clearTimeout(window[window.timerKey]);
    window[window.timerKey] = null;
  }

  if (window[window.intervalKey] != null || window[window.intervalKey] != undefined) {
    console.log('clearing interval');
    clearInterval(window[window.intervalKey]);
    window[window.intervalKey] = null;
    EventEmitter.emit('runTimer', -1);
  }
}