const newInvestment = () => ({ name: "", cashflow: 0 });

const initialState = () => ({
  beginningCashFlowDayIncome: 0,
  investments: (() => [...new Array(12)].map(() => newInvestment()))()
});

export default {
  namespaced: true,
  state: initialState(),
  mutations: {
    setBeginningCashFlowDayIncome: (state, payload) => (state.beginningCashFlowDayIncome = payload),
    setInvestment: (state, { index, name, cashFlow }) => (state.investments[index] = { name, cashFlow })
  }
};
