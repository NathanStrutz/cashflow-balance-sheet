<template>
  <div id="children-box">
    <div class="children-input">
      <label for="number-of-children">
        Number of
        <br />Children:
      </label>
      <input
        type="text"
        autocomplete="off"
        id="number-of-children"
        :value="children.numberOfChildren"
        @input="changeNumberOfChildren($event.target.value)"
        class="numeric"
      />
    </div>
    <sub>(Begin game with 0 children)</sub>
    <div class="children-input">
      <label for="per-child-expense">
        Per Child
        <br />Expense:
      </label>
      <dollar-format-input id="per-child-expense" :value="children.perChildExpense" @input="changePerChildExpense($event)" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import DollarFormatInput from "@/components/misc/DollarFormatInput.vue";

export default {
  components: { DollarFormatInput },
  computed: {
    ...mapState("expenses", ["children"])
  },
  methods: {
    ...mapMutations("expenses", ["changeNumberOfChildren", "changePerChildExpense"])
  }
};
</script>

<style lang="scss">
#children-box {
  background-color: #ccc;
  border: 1px solid black;
  margin: 40px 24px 24px;
  min-width: 200px;
  width: 65%;
  max-width: 560px;
  padding: 16px;
  white-space: nowrap;
}
#children-box input {
  background-color: #ccc;
  border-left-color: #aaa;
}
#children-box label {
  font-weight: bold;
  width: 150px;
}
.children-input {
  display: flex;
}
.children-input ~ .children-input {
  margin-top: 15px;
}
#children-box sub {
  display: block;
}
</style>