import Vue from "vue";
import Vuex from "vuex";

import income from "./stores/income";
import expenses from "./stores/expenses";
import liabilities from "./stores/liabilities";
import meta from "./stores/meta";
import assets from "./stores/assets";

Vue.use(Vuex);

const newStock = () => ({ name: "", shares: 0, costPerShare: 0 });
const newCd = () => ({ ...newStock(), payoutPerShare: 0 });
const newRealEstate = () => ({ name: "", downPayment: 0, cost: 0, mortgage: 0, income: 0 });
const newBusiness = () => ({ name: "", downPayment: 0, cost: 0, liability: 0, income: 0 });

export default new Vuex.Store({
  state: {
    investments: {
      realEstate: [newRealEstate(), newRealEstate(), newRealEstate(), newRealEstate()],
      businesses: [newBusiness(), newBusiness()],
      stocks: [newStock(), newStock()],
      cds: [newCd()]
    }
  },

  getters: {
    passiveIncome: (state, getters, rootState, rootGetters) =>
      rootState.income.interest.value +
      state.investments.cds.reduce((sum, it) => sum + it.payoutPerShare * it.shares, 0) +
      state.investments.realEstate.reduce((sum, it) => sum + it.income, 0) +
      state.investments.businesses.reduce((sum, it) => sum + it.income, 0),
    totalIncome: (state, getters, rootState, rootGetters) => rootState.income.salary.value - 0 + getters.passiveIncome,
    childExpenses: (state, getters, rootState, rootGetters) =>
      rootState.expenses.children.numberOfChildren * rootState.expenses.children.perChildExpense,
    totalExpenses: (state, getters, rootState, rootGetters) =>
      rootState.expenses.taxes.value +
      rootState.expenses.mortgage.value +
      rootState.expenses.schoolLoan.value +
      rootState.expenses.carLoan.value +
      rootState.expenses.creditCard.value +
      rootState.expenses.retail.value +
      rootState.expenses.other.value +
      rootState.expenses.bankLoan.value +
      getters.childExpenses,
    cashFlow: (state, getters) => getters.totalIncome - getters.totalExpenses
  },

  mutations: {},

  modules: {
    income,
    expenses,
    liabilities,
    meta,
    assets
  }
});
