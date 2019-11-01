import Vue from "vue";
import Vuex from "vuex";

import income from "./stores/income";
import expenses from "./stores/expenses";
import liabilities from "./stores/liabilities";

Vue.use(Vuex);

const newStock = () => ({ name: "", shares: 0, costPerShare: 0 });
const newCd = () => ({ ...newStock(), payoutPerShare: 0 });
const newRealEstate = () => ({ name: "", downPayment: 0, cost: 0, mortgage: 0, income: 0 });
const newBusiness = () => ({ name: "", downPayment: 0, cost: 0, liability: 0, income: 0 });

export default new Vuex.Store({
  state: {
    meta: {
      Profession: "",
      Player: "",
      Auditor: ""
    },
    assets: {
      savings: 0
    },
    investments: {
      realEstate: [newRealEstate(), newRealEstate(), newRealEstate(), newRealEstate()],
      businesses: [newBusiness(), newBusiness()],
      stocks: [newStock(), newStock()],
      cds: [newCd()]
    }
  },

  getters: {
    passiveIncome: (state, getters) =>
      state.income.interest.value +
      state.investments.cds.reduce((sum, it) => sum + it.payoutPerShare * it.shares, 0) +
      state.investments.realEstate.reduce((sum, it) => sum + it.income, 0) +
      state.investments.businesses.reduce((sum, it) => sum + it.income, 0),
    totalIncome: (state, getters) => state.income.salary.value - 0 + getters.passiveIncome,
    childExpenses: state => state.expenses.children.numberOfChildren * state.expenses.children.perChildExpense,
    totalExpenses: (state, getters) =>
      state.expenses.taxes.value +
      state.expenses.mortgage.value +
      state.expenses.schoolLoan.value +
      state.expenses.carLoan.value +
      state.expenses.creditCard.value +
      state.expenses.retail.value +
      state.expenses.other.value +
      state.expenses.bankLoan.value +
      getters.childExpenses,
    cashFlow: (state, getters) => getters.totalIncome - getters.totalExpenses
  },

  mutations: {},

  modules: {
    income,
    expenses,
    liabilities
  }
});
