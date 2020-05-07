import { isEmpty }      from 'lodash';
import { actions }      from './core.actions';
import { mutations }    from './core.commits';
import { storageKeys,
  getStorageValue, setStorageValue
}                       from '../utils/storage-utils';

let localState = JSON.parse(getStorageValue(storageKeys.USER_CONTEXT));
/**
 * validate session in storage when refreshed
 */
validateLocalStorage(localState);

localState = JSON.parse(getStorageValue(storageKeys.USER_CONTEXT));
const state = {
  userContext: localState || {}
};

export const core = {
  namespaced: true,
  actions,
  mutations,
  state
};

function validateLocalStorage(localState) {
  if (!isEmpty(localState)) {
    if (new Date(localState.expirationTime).getTime() < new Date().getTime()) {
      setStorageValue(storageKeys.USER_CONTEXT, JSON.stringify({}));
    }
  }
}