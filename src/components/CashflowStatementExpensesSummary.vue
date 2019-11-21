<template>
  <div id="expense-summary">
    <children-box />
    <div class="total-io">
      <label for="total-expenses">Total Expenses:</label>
      <input type="text" id="total-expenses" :value="totalExpenses" class="numeric" readonly />
    </div>
  </div>
</template>

<script>
import ChildrenBox from "./ChildrenBox.vue";
import { mapGetters } from "vuex";

export default {
  components: { ChildrenBox },
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