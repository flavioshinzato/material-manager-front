// Full config:  https://github.com/axios/axios#request-config
/* eslint-disable */
import Vue from 'vue';
import axios from "axios";
import store from '../store';

const baseConfig = {
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 60 * 1000,
};

const _axiosInstance = axios.create(baseConfig);

_axiosInstance.interceptors.request.use(
  (config) => {
    if (store.getters.getEmail && store.getters.getToken) {
      config.headers.common.USER_EMAIL = store.getters.getEmail;
      config.headers.common.USER_TOKEN = store.getters.getToken;
      config.headers.common['Cache-Control'] = 'no-cache';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

_axiosInstance.interceptors.response.use(
  (response) => {
    if (response.headers.token) {
      store.dispatch('updateToken', response.headers.token);
    }
    return response;
  },
  (error) => {
    store.dispatch('handleError', error);
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axiosInstance;
  window.axios = _axiosInstance;
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return _axiosInstance;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
