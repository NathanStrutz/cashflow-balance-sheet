<template>
  <modal-window @del="deleteStock(index)" @close="closeModal">
    <template #header>Real Estate</template>
    <template #body>
      <table>
        <tbody>
          <tr>
            <td><label>Stock / Fund / CD Name:</label></td>
            <td><input type="text" autocomplete="off" :value="item.name" @input="changeName($event.target.value)" /></td>
          </tr>
          <tr>
            <td><label>Shares:</label></td>
            <td>
              <input type="text" autocomplete="off" class="numeric" :value="item.shares" @input="changeShares($event.target.value)" />
            </td>
          </tr>
          <tr>
            <td><label>Cost Per Share:</label></td>
            <td><dollar-format-input name="costPerShare" :value="item.costPerShare" @input="changeCostPerShare" /></td>
          </tr>
          <tr>
            <td>Total Cost</td>
            <td class="numeric">
              <h2>{{ totalCost | dollars }}</h2>
            </td>
          </tr>
          <tr>
            <td><label>Sell Cost Per Share:</label></td>
            <td><dollar-format-input v-model="sellCostPerShare" /></td>
          </tr>
          <tr v-if="sellCostPerShare">
            <td>Your Take</td>
            <td class="numeric">
              <h2>{{ sellValue | dollars }}, gain of {{ (sellValue - totalCost) | dollars }}</h2>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </modal-window>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import DollarFormatInput from "@/components/misc/DollarFormatInput.vue";
import ModalWindow from "@/components/application/ModalWindow.vue";

export default {
  components: { ModalWindow, DollarFormatInput },
  props: {
    index: { type: Number, default: -1 }
  },
  data() {
    return {
      sellCostPerShare: 0
    };
  },
  computed: {
    ...mapGetters("investments", ["getStock"]),
    item() {
      return this.getStock(this.index);
    },
    totalCost() {
      return this.item.shares * this.item.costPerShare;
    },
    sellValue() {
      return this.sellCostPerShare * this.item.shares;
    }
  },
  methods: {
    ...mapMutations("investments", ["changeStockName", "changeStockShares", "changeStockCostPerShare", "deleteStock", "closeModal"]),
    changeName(value) {
      this.changeStockName({ index: this.index, value });
    },
    changeShares(value) {
      this.changeStockShares({ index: this.index, value: value });
    },
    changeCostPerShare(value) {
      this.changeStockCostPerShare({ index: this.index, value });
    }
  },
  filters: {
    dollars(value) {
      return `$${new Intl.NumberFormat("en-US").format(value)}`;
    }
  }
};
</script>
