const state = {
  loading: false,
};

const actions = {
  initLoading({ commit }) {
    commit('setLoading', true);
  },
  removeLoading({ commit }) {
    commit('setLoading', false);
  },
};

const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },
};

export default {
  state,
  actions,
  mutations,
};
