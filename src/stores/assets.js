export default {
  namespaced: true,
  state: {
    savings: 0
  },
  getters: {},
  mutations: {
    changeSavings: (state, payload) => (state.savings = payload)
  }
};
