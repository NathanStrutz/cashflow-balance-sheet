<template>
  <div class="line-input">
    <input type="text" autocomplete="off" :value="stock.name" @input="changeStockName" />
    <input type="text" autocomplete="off" class="numeric" :value="stock.shares" @input="changeStockShares" />
    <dollar-format-input :value="stock.costPerShare" @input="changeStockCostPerShare($event)" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import DollarFormatInput from "@/components/misc/DollarFormatInput.vue";

export default {
  components: { DollarFormatInput },
  props: {
    index: Number
  },
  computed: {
    ...mapGetters("investments", ["getStock"]),
    stock() {
      return this.getStock(this.index);
    }
  },
  methods: {
    changeStockName(e) {
      this.$store.commit("investments/changeStockName", { index: this.index, value: e.target.value });
    },
    changeStockShares(e) {
      this.$store.commit("investments/changeStockShares", { index: this.index, value: e.target.value });
    },
    changeStockCostPerShare(value) {
      this.$store.commit("investments/changeStockCostPerShare", { index: this.index, value: value });
    }
  }
};
</script>
