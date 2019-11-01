export default {
  namespaced: true,
  state: {
    salary: { note: "", value: 0 },
    interest: { note: "", value: 0 }
  },
  getters: {},
  mutations: {
    changeSalary(state, payload) {
      state.salary = { ...state.salary, ...payload };
    },
    changeInterest(state, payload) {
      state.interest = { ...state.interest, ...payload };
    },
    changeDividends(state, payload) {
      state.dividends = { ...state.dividends, ...payload };
    }
  }
};
