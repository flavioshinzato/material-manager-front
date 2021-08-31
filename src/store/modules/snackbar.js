const state = {
  message: null,
};

const getters = {
  messages: ($state) => $state.message,
  hasMessage: ($state) => !!$state.message,
};

const actions = {
  addErrorMessage({ commit, dispatch }, message) {
    dispatch('removeLoading');
    commit('setMessage', message);
  },

  addSuccessMessage({ commit, dispatch }, message) {
    dispatch('removeLoading');
    commit('setMessage', message);
  },

  removeMessage({ commit }) {
    commit('setMessage', null);
  },
};

const mutations = {
  setMessage($state, payload) {
    const stateCopy = $state;
    stateCopy.message = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
