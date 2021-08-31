const state = {
  email: null,
  token: null,
};

const getters = {
  hasSession($state) {
    return !!$state.email && !!$state.token;
  },
  getEmail($state) {
    return $state.email;
  },
  getToken($state) {
    return $state.token;
  },
};

const actions = {
  createSession({ commit }, payload) {
    commit('setCredentials', payload);
  },

  refreshSession({ commit, dispatch }, payload) {
    dispatch('destroySession');
    commit('createSession', payload);
  },

  destroySession({ commit }) {
    commit('destroyCredentials');
  },

  updateToken({ commit, state }, newToken) {
    commit('setCredentials', { email: state.email, token: newToken });
  },
};

const mutations = {
  setCredentials($state, payload) {
    const stateCopy = $state;
    if (payload) {
      if (payload.email && payload.token) {
        stateCopy.email = payload.email;
        stateCopy.token = payload.token;
      }
    }
  },

  destroyCredentials($state) {
    const stateCopy = $state;
    stateCopy.email = null;
    stateCopy.token = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
