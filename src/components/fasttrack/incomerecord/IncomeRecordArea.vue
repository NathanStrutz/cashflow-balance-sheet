<template>
  <section class="title-box">
    <h3>Your CASHFLOW Day Income Record</h3>
    <table>
      <thead>
        <tr>
          <td colspan="2">Beginning CASHFLOW Day Income:</td>
          <td><dollar-format-input :value="beginningCashFlowDayIncome" readonly /></td>
        </tr>
        <tr>
          <th>Business</th>
          <th>Monthly Cash Flow</th>
          <th>New CASHFLOW Day Income</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(investment, index) in investments" :key="index">
          <td>
            <item-input-with-mystery-meat>
              <template #input>
                <input type="text" autocomplete="off" :value="investment.name" @input="changeInvestmentName(index, $event.target.value)" />
              </template>
              <template #right-1>
                <a v-if="index + 1 === investments.length" class="right-1" title="Add a row" @click="addInvestment"
                  ><img src="@/images/add.svg"
                /></a>
                <a
                  v-else-if="investments.length > 12 && !investment.name && !investment.cashflow"
                  class="right-1"
                  title="Remove row"
                  @click="removeInvestment(index)"
                  ><img src="@/images/remove.svg"
                /></a>
              </template>
            </item-input-with-mystery-meat>
          </td>
          <td><dollar-format-input :value="investment.cashflow" @input="changeInvestmentCashFlow(index, $event)" /></td>
          <td>
            <dollar-format-input :value="investment.cashflow ? beginningCashFlowDayIncome + getAggregateCashflow(index) : 0" readonly />
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import DollarFormatInput from "@/components/misc/DollarFormatInput.vue";
import ItemInputWithMysteryMeat from "@/components/misc/ItemInputWithMysteryMeat.vue";
import { mapGetters, mapState, mapMutations } from "vuex";

export default {
  components: { DollarFormatInput, ItemInputWithMysteryMeat },
  computed: {
    // ...mapState("fasttrack", ["investments"]),
    ...mapGetters("fasttrack", ["beginningCashFlowDayIncome"]),
    ...mapState("fasttrack", ["investments"])
  },
  methods: {
    ...mapMutations("fasttrack", ["setInvestmentName", "setInvestmentCashflow", "addInvestment", "removeInvestment"]),
    changeInvestmentName(index, name) {
      this.setInvestmentName({ index, name });
    },
    changeInvestmentCashFlow(index, cashflow) {
      this.setInvestmentCashflow({ index, cashflow });
    },
    getAggregateCashflow(index) {
      if (!this.investments[index].cashflow) {
        return 0;
      }
      return this.investments.reduce((agg, curr, idx) => {
        if (idx <= index) {
          return agg + curr.cashflow;
        } else {
          return agg;
        }
      }, 0);
    }
  }
  //   data: () => ({ investments: [] })
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 20px;
}

td {
  padding: 5px;
}
tr > td:first-child {
  padding-left: 0;
}
tr > td:last-child {
  padding-right: 0;
}
</style>