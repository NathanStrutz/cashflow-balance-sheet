<template>
    <section class="title-box">
      <h3>How to WIN!</h3>
      <table>
        <tr>
          <td>Your Beginning CASHFLOW Day Income</sub></td>
          <td>=</td>
          <td><dollar-format-input :value="beginningCashFlowDayIncome" readonly /></td>
        </tr>
        <tr>
          <td>Fast Track Cash Flow needed to win</td>
          <td>+</td>
          <td><dollar-format-input :value="50000" readonly /></td>
        </tr>
        <tr>
          <td>Your New CASHFLOW Day Income Goal to Win</sub></td>
          <td>=</td>
          <td><dollar-format-input :value="beginningCashFlowDayIncome + 50000" readonly /></td>
        </tr>
      </table>
    </section>
</template>

<script>
import DollarFormatInput from "@/components/misc/DollarFormatInput.vue";
import { mapGetters } from "vuex";

export default {
  components: { DollarFormatInput },
  computed: {
    ...mapGetters("fasttrack", ["beginningCashFlowDayIncome"])
  }
};
</script>
