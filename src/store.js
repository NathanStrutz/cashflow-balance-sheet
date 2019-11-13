import Vue from "vue";
import Vuex from "vuex";

import income from "./stores/income";
import expenses from "./stores/expenses";
import liabilities from "./stores/liabilities";
import meta from "./stores/meta";
import assets from "./stores/assets";
import investments from "./stores/investments";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},

  getters: {
    passiveIncome: (state, getters, rootState, rootGetters) =>
      rootState.income.interest.value +
      rootState.investments.cds.reduce((sum, it) => sum + it.payoutPerShare * it.shares, 0) +
      rootState.investments.realEstate.reduce((sum, it) => sum + it.income, 0) +
      rootState.investments.businesses.reduce((sum, it) => sum + it.income, 0),
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
    assets,
    investments
  }
});
