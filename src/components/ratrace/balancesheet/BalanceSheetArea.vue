<template>
  <section id="balance-sheet-area">
    <balance-sheet-assets />
    <balance-sheet-liabilities />
  </section>
</template>

<script>
import BalanceSheetAssets from "./BalanceSheetAssets.vue";
import BalanceSheetLiabilities from "./BalanceSheetLiabilities.vue";

export default {
  components: {
    BalanceSheetAssets,
    BalanceSheetLiabilities
  }
};
</script>

<style lang="scss">
/* 2nd grid for the bottom */
#balance-sheet-area {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "assets liabilities";
  border: 2px solid #000;
}

@media (max-width: 800px) {
  #balance-sheet-area {
    grid-template-columns: 1fr;
    grid-template-areas:
      "assets"
      "liabilities";
  }
}
</style>