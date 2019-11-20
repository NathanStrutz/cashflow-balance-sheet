import Vue from "vue";
import Vuex from "vuex";

import localStoragePlugin from "./stores/plugins/localstorage";

import income from "./stores/income";
import expenses from "./stores/expenses";
import liabilities from "./stores/liabilities";
import meta from "./stores/meta";
import assets from "./stores/assets";
import investments from "./stores/investments";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    passiveIncome: (state, getters, rootState, rootGetters) =>
      rootState.income.interest.value +
      rootState.income.interest2.value +
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
      getters.childExpenses +
      rootState.expenses.miscellaneousExpense.value,
    cashFlow: (state, getters) => getters.totalIncome - getters.totalExpenses
  },
  modules: {
    income,
    expenses,
    liabilities,
    meta,
    assets,
    investments
  },
  plugins: [localStoragePlugin]
});
