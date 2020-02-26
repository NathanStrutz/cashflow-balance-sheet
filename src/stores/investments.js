const newStock = () => ({ name: "", shares: 0, costPerShare: 0 });
const newRealEstate = () => ({ name: "", downPayment: 0, cost: 0, mortgage: 0, income: 0 });
const newBusiness = () => ({ name: "", downPayment: 0, cost: 0, liability: 0, income: 0 });

const initialState = () => ({
  realEstate: [newRealEstate(), newRealEstate(), newRealEstate(), newRealEstate()],
  businesses: [newBusiness(), newBusiness()],
  stocks: [newStock(), newStock()],
  modal: {
    show: false,
    type: null, // one of: realEstate, business, stock
    index: -1 // index of the item being edited
  }
});

export default {
  namespaced: true,
  state: initialState(),
  getters: {
    getStock: state => index => state.stocks[index],
    getRealEstate: state => index => state.realEstate[index],
    getBusiness: state => index => state.businesses[index]
  },
  mutations: {
    // Stocks / Mutual Funds / CDs
    changeStockName: (state, { index, value }) => (state.stocks[index].name = value),
    changeStockShares: (state, { index, value }) => (state.stocks[index].shares = value),
    changeStockCostPerShare: (state, { index, value }) => (state.stocks[index].costPerShare = value),
    showStockModal(state, index) {
      state.modal = {
        show: true,
        type: "stock",
        index: index
      };
    },

    // Real Estate
    changeRealEstateName: (state, { index, value }) => (state.realEstate[index].name = value),
    changeRealEstateDownPayment: (state, { index, value }) => (state.realEstate[index].downPayment = value),
    changeRealEstateCost: (state, { index, value }) => (state.realEstate[index].cost = value),
    changeRealEstateMortgage: (state, { index, value }) => (state.realEstate[index].mortgage = value),
    changeRealEstateIncome: (state, { index, value }) => (state.realEstate[index].income = value),
    addRealEstate: state => state.realEstate.push(newRealEstate()),
    deleteRealEstate: (state, index) => {
      state.realEstate = state.realEstate.filter((_val, i) => i !== index);
      if (state.realEstate.length < 4) {
        state.realEstate.push(newRealEstate());
      }
      state.modal.show = false;
    },
    showRealEstateModal(state, index) {
      state.modal = {
        show: true,
        type: "realEstate",
        index: index
      };
    },

    // Businesses
    changeBusinessName: (state, { index, value }) => (state.businesses[index].name = value),
    changeBusinessDownPayment: (state, { index, value }) => (state.businesses[index].downPayment = value),
    changeBusinessCost: (state, { index, value }) => (state.businesses[index].cost = value),
    changeBusinessLiability: (state, { index, value }) => (state.businesses[index].liability = value),
    changeBusinessIncome: (state, { index, value }) => (state.businesses[index].income = value),
    showBusinessModal(state, index) {
      state.modal = {
        show: true,
        type: "business",
        index: index
      };
    },

    closeModal(state) {
      state.modal.show = false;
    }
  }
};
