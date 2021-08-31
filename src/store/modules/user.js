import User from '@/api/resources/users';

const state = {
  user: null,
};

const getters = {
  currentUser: () => (state.user),
};

const actions = {
  login({ commit, dispatch }, payload) {
    User.login(payload).then((response) => {
      dispatch('createSession', response);
      commit('setUser', response);
      dispatch('removeLoading');
    });
  },

  fbLogin({ commit, dispatch }, payload) {
    User.fbLogin(payload).then((response) => {
      dispatch('createSession', response);
      commit('setUser', response);
      dispatch('removeLoading');
    });
  },

  googleLogin({ commit, dispatch }, payload) {
    User.googleLogin(payload).then((response) => {
      dispatch('createSession', response);
      commit('setUser', response);
      dispatch('removeLoading');
    });
  },

  appleLogin({ commit, dispatch }, payload) {
    User.appleLogin(payload).then((response) => {
      dispatch('createSession', response);
      commit('setUser', response);
      dispatch('removeLoading');
    });
  },

  refreshUser({ commit, dispatch }) {
    User.show().then((response) => {
      dispatch('refreshSession', response);
      commit('setUser', response);
      dispatch('removeLoading');
    });
  },

  register({ commit, dispatch }, payload) {
    User.register(payload).then((response) => {
      commit('setUser', response);
      dispatch('createSession', response);
      dispatch('removeLoading');
    });
  },

  logout({ commit, dispatch }) {
    commit('setUser', null);
    dispatch('destroySession');
  },
};

const mutations = {
  setUser($state, payload) {
    const stateCopy = $state;
    stateCopy.user = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
