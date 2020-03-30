<template>
  <tbody>
    <tr v-for="(property, index) in realEstate" :key="index" :class="!index ? 'line-input' : 'blank-line-input'">
      <td v-if="!index">
        <label>RE Mortgage:</label>
      </td>
      <td :colspan="!index ? 1 : 2">
        <property-name-input :index="index" />
      </td>
      <td>
        <dollar-format-input :value="property.mortgage" @input="changeMortgage($event, index)" />
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
    ...mapMutations("investments", ["changeRealEstateName", "changeRealEstateIncome", "changeRealEstateMortgage"]),

    changeName(e, index) {
      this.changeRealEstateName({ index: index, value: e.target.value });
    },
    changeMortgage(value, index) {
      this.changeRealEstateMortgage({ index: index, value: value });
    }
  }
};
</script>
