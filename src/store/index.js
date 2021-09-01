import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import Loading from './modules/loading';
import Error from './modules/error';
import SportsMaterials from './modules/sportsMaterials';

Vue.use(Vuex);

const persistedStateData = createPersistedState({
  paths: ['Session.email', 'Session.token'],
});

export default new Vuex.Store({
  modules: {
    Loading,
    Error,
    SportsMaterials,
  },
  plugins: [persistedStateData],
});
