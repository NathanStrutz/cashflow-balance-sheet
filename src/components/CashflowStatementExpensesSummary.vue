<template>
  <div id="expense-summary">
    <children-box />
    <div class="total-io">
      <label for="total-expenses">Total Expenses:</label>
      <dollar-format-input id="total-expenses" :value="totalExpenses" readonly />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DollarFormatInput from "@/components/misc/DollarFormatInput.vue";
import ChildrenBox from "./ChildrenBox.vue";

export default {
  components: { DollarFormatInput, ChildrenBox },
  computed: {
    ...mapGetters(["totalExpenses"])
  }
};
</script>

<style lang="scss">
#expense-summary {
  justify-content: space-between;
  grid-area: expense-summary;
}
</style>