<template>
  <div id="assets">
    <h3 class="column-title-bar">Assets</h3>
    <div id="asset-list">
      <div class="line-input">
        <label for="savings">Savings:</label>
        <dollar-format-input :value="savings" @input="changeSavings($event)" />
      </div>
      <div class="line-input all-text">
        <div>Stocks/Mutual's/CDs</div>
        <div>No. of Shares:</div>
        <div>Cost/Share:</div>
      </div>
      <stock-mutual-cd-asset-row v-for="(_, index) in stocks" :key="'stocks-' + index" :index="index" />
      <div class="line-input all-text">
        <div>Real Estate:</div>
        <div>Down Pay:</div>
        <div>Cost:</div>
      </div>
      <real-estate-asset-row v-for="(_, index) in realEstate" :key="'real-assets-' + index" :index="index" />
      <div class="line-input all-text">
        <div>Business:</div>
        <div>Down Pay:</div>
        <div>Cost:</div>
      </div>
      <business-asset-row v-for="(_, index) in businesses" :key="'business-assets-' + index" :index="index" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import DollarFormatInput from "@/components/misc/DollarFormatInput.vue";
import StockMutualCdAssetRow from "./assets/StockMutualCdAssetRow.vue";
import RealEstateAssetRow from "./assets/RealEstateAssetRow.vue";
import BusinessAssetRow from "./assets/BusinessAssetRow.vue";

export default {
  components: { DollarFormatInput, StockMutualCdAssetRow, RealEstateAssetRow, BusinessAssetRow },
  computed: {
    ...mapState("assets", ["savings"]),
    ...mapState("investments", ["stocks", "realEstate", "businesses"])
  },
  methods: {
    ...mapMutations("assets", ["changeSavings"])
  }
};
</script>

<style lang="scss">
#assets {
  grid-area: assets;
}

#asset-list {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: flex-start;
}

#asset-list > * {
  /* In relation to its parent */
  flex: 1 1 auto;
  margin: 7px;
  /* in relation to its children */
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}
#asset-list > * > * {
  flex: 1 1 auto;
  white-space: nowrap;
}
</style>
