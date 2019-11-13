const newStock = () => ({ name: "", shares: 0, costPerShare: 0 });
const newCd = () => ({ ...newStock(), payoutPerShare: 0 });
const newRealEstate = () => ({ name: "", downPayment: 0, cost: 0, mortgage: 0, income: 0 });
const newBusiness = () => ({ name: "", downPayment: 0, cost: 0, liability: 0, income: 0 });

export default {
  namespaced: true,
  state: {
    realEstate: [newRealEstate(), newRealEstate(), newRealEstate(), newRealEstate()],
    businesses: [newBusiness(), newBusiness()],
    stocks: [newStock(), newStock()],
    cds: [newCd()]
  },
  getters: {
    getStock: state => index => state.stocks[index]
  },
  mutations: {
    changeStockName: (state, { index, value }) => (state.stocks[index].name = value),
    changeStockShares: (state, { index, value }) => (state.stocks[index].shares = value),
    changeStockCostPerShare: (state, { index, value }) => (state.stocks[index].costPerShare = value)
  }
};
