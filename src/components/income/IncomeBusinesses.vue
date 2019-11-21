<template>
  <tbody>
    <tr v-for="(business, index) in businesses" :key="index" :class="index === 0 ? 'line-input' : 'blank-line-input'">
      <td>
        <label v-if="index === 0">Businesses:</label>
        <input type="text" :value="business.name" @input="changeName($event, index)" />
      </td>
      <td>
        <input type="text" class="numeric" :value="business.income" @input="changeIncome($event, index)" />
      </td>
    </tr>
  </tbody>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState("investments", ["businesses"])
  },
  methods: {
    ...mapMutations("investments", ["changeBusinessName", "changeBusinessIncome"]),

    changeName(e, index) {
      this.changeBusinessName({ index: index, value: e.target.value });
    },
    changeIncome(e, index) {
      this.changeBusinessIncome({ index: index, value: Number(e.target.value) });
    }
  }
};
</script>
