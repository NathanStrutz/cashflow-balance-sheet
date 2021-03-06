import Vue from "vue";
import Vuex from "vuex";

import localStoragePlugin from "./stores/plugins/localstorage";
import resetStatePlugin from "./stores/plugins/resetstate";

import income from "./stores/income";
import expenses from "./stores/expenses";
import liabilities from "./stores/liabilities";
import meta from "./stores/meta";
import assets from "./stores/assets";
import investments from "./stores/investments";
import fasttrack from "./stores/fasttrack";

Vue.use(Vuex);

const initialState = () => ({
  displaySheet: "Rat Race"
});
export default new Vuex.Store({
  state: initialState(),
  getters: {
    passiveIncome: (_state, _getters, rootState) =>
      rootState.income.interest.value +
      rootState.income.interest2.value +
      rootState.investments.realEstate.reduce((sum, it) => sum + it.income, 0) +
      rootState.investments.businesses.reduce((sum, it) => sum + it.income, 0),
    totalIncome: (_state, getters, rootState) => rootState.income.salary.value - 0 + getters.passiveIncome,
    childExpenses: (_state, _getters, rootState) =>
      rootState.expenses.children.numberOfChildren * rootState.expenses.children.perChildExpense,
    totalExpenses: (_state, getters, rootState, rootGetters) =>
      rootState.expenses.taxes.value +
      rootState.expenses.mortgage.value +
      rootState.expenses.schoolLoan.value +
      rootState.expenses.carLoan.value +
      rootState.expenses.creditCard.value +
      rootState.expenses.retail.value +
      rootState.expenses.other.value +
      rootGetters["expenses/bankLoanAmount"] +
      getters.childExpenses +
      rootState.expenses.miscellaneousExpense.value,
    cashFlow: (_state, getters) => getters.totalIncome - getters.totalExpenses
  },
  mutations: {
    toRatRace: state => (state.displaySheet = "Rat Race"),
    toFastTrack: state => (state.displaySheet = "Fast Track"),
    RESET_STATE: () => {}
  },
  modules: {
    income,
    expenses,
    liabilities,
    meta,
    assets,
    investments,
    fasttrack
  },
  plugins: [resetStatePlugin, localStoragePlugin]
});
