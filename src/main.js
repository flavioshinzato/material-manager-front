import './plugins';
import Vue from 'vue';
import App from './App.vue';
import i18n from './plugins/i18n';
import vuetify from './plugins/vuetify';
import store from './store';
import router from './routes';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  i18n,
  store,
  render: (h) => h(App),
}).$mount('#app');
