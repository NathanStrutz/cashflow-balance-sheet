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
    setInvestmentName: (state, { index, name }) => (state.investments[index].name = name),
    setInvestmentCashflow: (state, { index, cashflow }) => (state.investments[index].cashflow = cashflow),
    addInvestment: state => state.investments.push(newInvestment()),
    removeInvestment: (state, index) => state.investments.splice(index, 1)
  }
};
