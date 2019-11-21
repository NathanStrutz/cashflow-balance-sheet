const initialState = () => ({
  savings: 0
});

import Vuex from "vuex";

export default {
  namespaced: true,
  state: initialState(),
  mutations: {
    resetState: state => Object.assign(state, initialState()),
    changeSavings: (state, payload) => (state.savings = payload)
  }
};
