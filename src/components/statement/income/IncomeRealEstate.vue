<template>
  <tbody>
    <tr v-for="(property, index) in realEstate" :key="index" :class="index === 0 ? 'line-input' : 'blank-line-input'">
      <td class="inline">
        <label v-if="index === 0">Real Estate:</label>
        <property-name-input :index="index" />
      </td>
      <td>
        <dollar-format-input :value="property.income" @input="changeIncome($event, index)" />
      </td>
    </tr>
  </tbody>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import DollarFormatInput from "@/components/misc/DollarFormatInput.vue";
import PropertyNameInput from "@/components/misc/PropertyNameInput.vue";

export default {
  components: { DollarFormatInput, PropertyNameInput },
  computed: {
    ...mapState("investments", ["realEstate"])
  },
  methods: {
    ...mapMutations("investments", ["changeRealEstateIncome"]),

    changeIncome(value, index) {
      this.changeRealEstateIncome({ index: index, value: value });
    }
  }
};
</script>

<style lang="scss">
td.inline {
  display: flex;
  flex-direction: row;
}
</style>
