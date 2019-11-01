export default {
  namespaced: true,
  state: {
    mortgage: 0,
    schoolLoan: 0,
    carLoan: 0,
    creditCard: 0,
    retail: 0,
    bankLoan: 0
  },
  getters: {},
  mutations: {
    changeMortgage: (state, payload) => (state.mortgage = payload.value),
    changeSchoolLoan: (state, payload) => (state.schoolLoan = payload.value),
    changeCarLoan: (state, payload) => (state.carLoan = payload.value),
    changeCreditCard: (state, payload) => (state.creditCard = payload.value),
    changeRetail: (state, payload) => (state.retail = payload.value),
    changeBankLoan: (state, payload) => (state.bankLoan = payload.value)
  }
};
