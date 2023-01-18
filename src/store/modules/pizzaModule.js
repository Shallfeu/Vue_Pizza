import pizzaService from '@/services/pizza.service';

const pizzaModule = {
  state: {
    items: [],
    loading: false,
    error: null,
  },

  getters: {},

  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },

  actions: {
    async fetchData({ commit }) {
      try {
        commit('setLoading', true);
        const data = await pizzaService.get();
        commit('setItems', data);
      } catch (error) {
        commit('setError', error.message);
      } finally {
        commit('setLoading', false);
      }
    },
  },

  namespaced: true,
};

export default pizzaModule;
