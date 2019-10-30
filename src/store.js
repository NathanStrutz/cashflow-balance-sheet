import Vue from "vue";
import Vuex from "vuex";

import income from "./stores/income";
import expenses from "./stores/expenses";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meta: {
      Profession: "",
      Player: "",
      Auditor: ""
    },
    assets: {
      savings: 0,
      stocks: [{ name: "", shares: 0, costPerShare: 0 }, { name: "", shares: 0, costPerShare: 0 }]
    },
    liabilities: {
      mortgage: 0,
      schoolLoan: 0,
      carLoan: 0,
      creditCard: 0,
      retail: 0,
      bankLoan: 0
    },
    investments: {
      realEstate: [
        { name: "", downPayment: 0, cost: 0, mortgage: 0, income: 0 },
        { name: "", downPayment: 0, cost: 0, mortgage: 0, income: 0 },
        { name: "", downPayment: 0, cost: 0, mortgage: 0, income: 0 },
        { name: "", downPayment: 0, cost: 0, mortgage: 0, income: 0 }
      ],
      businesses: [
        { name: "", downPayment: 0, cost: 0, liability: 0, income: 0 },
        { name: "", downPayment: 0, cost: 0, liability: 0, income: 0 }
      ]
    }
  },

  getters: {
    passiveIncome: (state, getters) =>
      state.income.interest.value +
      state.income.dividends.reduce((sum, it) => sum + it.value, 0) +
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
    income: income,
    expenses: expenses
  }
});
