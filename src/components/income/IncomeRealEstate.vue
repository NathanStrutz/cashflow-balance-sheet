<template>
  <tbody>
    <tr v-for="(property, index) in realEstate" :key="index" :class="index === 0 ? 'line-input' : 'blank-line-input'">
      <td>
        <label v-if="index === 0">Real Estate:</label>
        <input type="text" :value="property.name" @input="changeName($event, index)" />
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

export default {
  components: { DollarFormatInput },
  computed: {
    ...mapState("investments", ["realEstate"])
  },
  methods: {
    ...mapMutations("investments", ["changeRealEstateName", "changeRealEstateIncome"]),

    changeName(e, index) {
      this.changeRealEstateName({ index: index, value: e.target.value });
    },
    changeIncome(value, index) {
      this.changeRealEstateIncome({ index: index, value: value });
    }
  }
};
</script>
