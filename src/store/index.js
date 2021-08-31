import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import Loading from './modules/loading';
import Session from './modules/session';
import Snackbar from './modules/snackbar';
import Error from './modules/error';
import User from './modules/user';
import SportsMaterials from './modules/sportsMaterials';

Vue.use(Vuex);

const persistedStateData = createPersistedState({
  paths: ['Session.email', 'Session.token'],
});

export default new Vuex.Store({
  modules: {
    User,
    Loading,
    Session,
    Snackbar,
    Error,
    SportsMaterials,
  },
  plugins: [persistedStateData],
});
