<template>
  <div class="expenses">
    <h3 class="column-title-bar">Expenses</h3>
    <table class="line-inputs">
      <tbody>
        <state-connected-input title="Taxes" category="expenses" item="taxes" change="changeTaxes" />
        <state-connected-input title="Home Mortgage" category="expenses" item="mortgage" change="changeMortgage" />
        <state-connected-input title="School Loan Payment" category="expenses" item="schoolLoan" change="changeSchoolLoan" />
        <state-connected-input title="Car Payment" category="expenses" item="carLoan" change="changeCarLoan" />
        <state-connected-input title="Credit Card Payment" category="expenses" item="creditCard" change="changeCreditCard" />
        <state-connected-input title="Retail Payment" category="expenses" item="retail" change="changeRetail" />
        <state-connected-input title="Other Expenses" category="expenses" item="other" change="changeOther" />
        <line-input title="Child Expenses" :text="children.note" @updateText="changeChildNote" :value="childExpenses" readonly />
        <line-input title="Bank Loan Payment" :text="bankLoan.note" @updateText="changeBankLoanNote" :value="bankLoanAmount" readonly />
        <state-connected-input category="expenses" item="miscellaneousExpense" change="changeMiscellaneousExpense" />
      </tbody>
    </table>
  </div>
</template>

<script>
import StateConnectedInput from "@/components/misc/StateConnectedInput.vue";
import LineInput from "@/components/misc/LineInput.vue";
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  components: {
    StateConnectedInput,
    LineInput
  },
  computed: {
    ...mapState("expenses", ["children", "bankLoan"]),
    ...mapGetters("expenses", ["bankLoanAmount"]),
    ...mapGetters(["childExpenses"])
  },
  methods: {
    ...mapMutations("expenses", ["changeChildNote", "changeBankLoanNote"])
  }
};
</script>

<style lang="scss">
#expenses {
  grid-area: expenses;
}
</style>