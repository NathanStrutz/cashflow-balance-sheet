<template>
  <div>
    <rat-race-header />
    <statement-area />
    <monthly-cash-flow />
    <balance-sheet-area />
    <modal-window-loader />
  </div>
</template>

<script>
import RatRaceHeader from "@/components/ratrace/RatRaceHeader.vue";
import StatementArea from "@/components/ratrace/statement/StatementArea.vue";
import MonthlyCashFlow from "@/components/ratrace/MonthlyCashFlow.vue";
import BalanceSheetArea from "@/components/ratrace/balancesheet/BalanceSheetArea.vue";
import ModalWindowLoader from "@/components/application/ModalWindowLoader.vue";

export default {
  components: { RatRaceHeader, StatementArea, MonthlyCashFlow, BalanceSheetArea, ModalWindowLoader }
};
</script>

<style lang="scss">
#income-summary,
#expense-summary,
.total-io {
  font-family: sans-serif;
}

.total-io {
  display: flex;
  font-weight: 800;
  padding: 0 0 0 50%;
  label {
    flex: 0 0 110px;
  }
  sub {
    display: block;
    color: #666;
  }
}
</style>
