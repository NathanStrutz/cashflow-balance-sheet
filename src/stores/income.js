export default {
  namespaced: true,
  state: {
    salary: { note: "", value: 0 },
    interest: { note: "", value: 0 },
    // Yes "interest2" - not everything has to be fully dynamic.
    // Thinking pragmatically, i've played this game like 100 times and have never needed more than one interest row.
    interest2: { note: "", value: 0 }
  },
  getters: {},
  mutations: {
    changeSalary: (state, payload) => (state.salary = { ...state.salary, ...payload }),
    changeInterest: (state, payload) => (state.interest = { ...state.interest, ...payload }),
    changeInterest2: (state, payload) => (state.interest2 = { ...state.interest2, ...payload })
  }
};
