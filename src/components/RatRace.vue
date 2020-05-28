<template>
  <div>
    <header-menu />
    <rat-race-header />
    <statement-area />
    <balance-sheet-cash-flow />
    <balance-sheet-area />
    <modal-window-loader />
  </div>
</template>

<script>
import RatRaceHeader from "@/components/ratrace/RatRaceHeader.vue";
import StatementArea from "@/components/ratrace/statement/StatementArea.vue";
import BalanceSheetCashFlow from "@/components/ratrace/BalanceSheetCashFlow.vue";
import BalanceSheetArea from "@/components/ratrace/balancesheet/BalanceSheetArea.vue";
import ModalWindowLoader from "@/components/application/ModalWindowLoader.vue";
import HeaderMenu from "@/components/application/HeaderMenu.vue";

export default {
  components: { RatRaceHeader, StatementArea, BalanceSheetCashFlow, BalanceSheetArea, ModalWindowLoader, HeaderMenu }
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
  padding: 0 0 30px 30%;

  label {
    flex: 0 0 110px;
  }
  sub {
    display: block;
    color: #666;
  }
}
@media (max-width: 800px) {
  .total-io {
    padding-left: 10% !important;
  }
}
</style>
