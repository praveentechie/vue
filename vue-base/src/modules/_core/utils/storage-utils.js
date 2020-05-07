export const storageKeys = {
  USER_CONTEXT: 'app:user-context'
};

export const devKeys = {
  MUTATION_LOGS: 'dev:mutation-logs'
};

export const getStorageValue = (key) => {
  if (!key || !localStorage) {
    return null;
  }

  return localStorage.getItem(key);
};

export const setStorageValue = (key, value) => {
  if (!key || !localStorage) {
    return;
  }

  localStorage.setItem(key, value);
};