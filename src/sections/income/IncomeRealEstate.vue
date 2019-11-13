<template>
  <tbody>
    <tr v-for="(property, index) in realEstate" :key="index" :class="index === 0 ? 'line-input' : 'blank-line-input'">
      <td>
        <label v-if="index === 0">Real Estate:</label>
        <input type="text" :value="property.name" @input="changeName($event, index)" />
      </td>
      <td>
        <input type="text" class="income" :value="property.income" @input="changeIncome($event, index)" />
      </td>
    </tr>
  </tbody>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState("investments", ["realEstate"])
  },
  methods: {
    ...mapMutations("investments", ["changeRealEstateName", "changeRealEstateIncome"]),

    changeName(e, index) {
      this.changeRealEstateName({ index: index, value: e.target.value });
    },
    changeIncome(e, index) {
      this.changeRealEstateIncome({ index: index, value: Number(e.target.value) });
    }
  }
};
</script>
