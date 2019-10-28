import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meta: {
      Profession: "",
      Player: "",
      Auditor: ""
    },
    income: {
      salary: { note: "", value: 0 },
      interest: { note: "", value: 0 },
      dividends: [{ note: "", value: 0 }, { note: "", value: 0 }]
    },
    expenses: {
      taxes: { note: "", value: 0 },
      mortgage: { note: "", value: 0 },
      schoolLoan: { note: "", value: 0 },
      carLoan: { note: "", value: 0 },
      creditCard: { note: "", value: 0 },
      retail: { note: "", value: 0 },
      other: { note: "", value: 0 },
      bankLoan: { note: "", value: 0 },
      children: { numberOfChildren: 0, perChildExpense: 0 }
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

  mutations: {
    changeSalary(state, payload) {
      state.income.salary = { ...state.income.salary, ...payload };
    }
  },

  modules: {}
});
