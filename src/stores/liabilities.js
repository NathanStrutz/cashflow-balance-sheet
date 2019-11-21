const initialState = () => ({
  mortgage: 0,
  schoolLoan: 0,
  carLoan: 0,
  creditCard: 0,
  retail: 0,
  bankLoan: 0
});

export default {
  namespaced: true,
  state: initialState(),
  mutations: {
    resetState: state => Object.assign(state, initialState()),

    changeMortgage: (state, { value }) => (state.mortgage = value),
    changeSchoolLoan: (state, { value }) => (state.schoolLoan = value),
    changeCarLoan: (state, { value }) => (state.carLoan = value),
    changeCreditCard: (state, { value }) => (state.creditCard = value),
    changeRetail: (state, { value }) => (state.retail = value),
    changeBankLoan: (state, { value }) => (state.bankLoan = value)
  }
};
