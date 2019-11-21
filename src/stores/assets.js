const initialState = () => ({
  savings: 0
});

export default {
  namespaced: true,
  state: initialState(),
  mutations: {
    resetState: state => Object.assign(state, initialState()),
    changeSavings: (state, payload) => (state.savings = payload)
  }
};
