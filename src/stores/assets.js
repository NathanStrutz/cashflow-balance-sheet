export default {
  namespaced: true,
  state: {
    savings: 0
  },
  mutations: {
    changeSavings: (state, payload) => (state.savings = payload)
  }
};
