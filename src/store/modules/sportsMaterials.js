import SportsMaterials from '@/api/resources/sportsMaterials';

const state = {
  sportsMaterials: [],
};

const getters = {
  getSportsMaterials: () => (state.sportsMaterials),
};

const actions = {
  fetchSportsMaterials({ commit, dispatch }) {
    SportsMaterials.index().then((response) => {
      commit('setSportsMaterials', response);
      dispatch('removeLoading');
    });
  },
};

const mutations = {
  setSportsMaterials($state, payload) {
    const stateCopy = $state;
    stateCopy.sportsMaterials = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
