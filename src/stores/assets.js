const initialState = () => ({
  savings: 0
});

export default {
  namespaced: true,
  state: initialState(),
  mutations: {
    changeSavings: (state, payload) => (state.savings = payload)
  }
};
