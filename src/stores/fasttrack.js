const newInvestment = () => ({ name: "", cashflow: 0 });

const initialState = () => ({
  beginningCashFlowDayIncome: 0,
  investments: (() => [...new Array(12)].map(() => newInvestment()))()
});

export default {
  namespaced: true,
  state: initialState(),
  getters: {
    beginningCashFlowDayIncome: (_state, _getters, _rootState, rootGetters) => Math.round(rootGetters.passiveIncome / 1000) * 1000 * 100
  },
  mutations: {
    setBeginningCashFlowDayIncome: (state, payload) => (state.beginningCashFlowDayIncome = payload),
    setInvestment: (state, { index, name, cashFlow }) => (state.investments[index] = { name, cashFlow })
  }
};
