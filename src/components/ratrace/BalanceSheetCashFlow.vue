<template>
  <div class="row">
    <h2>Balance Sheet</h2>
    <monthly-cash-flow class="monthly-cash-flow-area" />
  </div>
</template>

<script>
import MonthlyCashFlow from "@/components/ratrace/MonthlyCashFlow.vue";

export default {
  components: { MonthlyCashFlow }
};
</script>

<style lang="scss" scoped>
.row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  grid-template-areas: "balance-title cashflow-summary";

  h2 {
    grid-area: balance-title;
    vertical-align: bottom;
    padding-top: 20px;
    margin: 0;
  }
  .monthly-cash-flow-area {
    grid-area: cashflow-summary;
    padding-bottom: 10px;
    padding-left: 30%;
    display: flex;
    align-items: center;
  }
}

@media (max-width: 800px) {
  .row {
    grid-template-columns: 1fr;
    grid-template-areas: "cashflow-summary" "balance-title";
  }

  .monthly-cash-flow-area {
    padding-left: 10% !important;
  }
}
</style>
