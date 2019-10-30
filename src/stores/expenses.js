export default {
  namespaced: true,
  state: {
    taxes: { note: "", value: 0 },
    mortgage: { note: "", value: 0 },
    schoolLoan: { note: "", value: 0 },
    carLoan: { note: "", value: 0 },
    creditCard: { note: "", value: 0 },
    retail: { note: "", value: 0 },
    other: { note: "", value: 0 },
    bankLoan: { note: "", value: 0 },
    children: { note: "", numberOfChildren: 0, perChildExpense: 0 }
  },
  getters: {},
  mutations: {
    changeTaxes(state, payload) {
      state.taxes = { ...state.taxes, ...payload };
    },
    changeMortgage(state, payload) {
      state.mortgage = { ...state.mortgage, ...payload };
    },
    changeSchoolLoan(state, payload) {
      state.schoolLoan = { ...state.schoolLoan, ...payload };
    },
    changeCarLoan(state, payload) {
      state.carLoan = { ...state.carLoan, ...payload };
    },
    changeCreditCard(state, payload) {
      state.creditCard = { ...state.creditCard, ...payload };
    },
    changeRetail(state, payload) {
      state.retail = { ...state.retail, ...payload };
    },
    changeOther(state, payload) {
      state.other = { ...state.other, ...payload };
    },
    changeBankLoan(state, payload) {
      state.bankLoan = { ...state.bankLoan, ...payload };
    },
    changeNumberOfChildren(state, payload) {
      state.children.numberOfChildren = payload;
    },
    changePerChildExpense(state, payload) {
      state.children.perChildExpense = payload;
    }
  }
};
