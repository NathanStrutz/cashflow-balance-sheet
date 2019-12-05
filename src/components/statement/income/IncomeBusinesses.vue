<template>
  <tbody>
    <tr v-for="(business, index) in businesses" :key="index" :class="index === 0 ? 'line-input' : 'blank-line-input'">
      <td>
        <label v-if="index === 0">Businesses:</label>
        <input type="text" autocomplete="off" :value="business.name" @input="changeName($event, index)" />
      </td>
      <td>
        <dollar-format-input :value="business.income" @input="changeIncome($event, index)" />
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
    ...mapState("investments", ["businesses"])
  },
  methods: {
    ...mapMutations("investments", ["changeBusinessName", "changeBusinessIncome"]),

    changeName(e, index) {
      this.changeBusinessName({ index: index, value: e.target.value });
    },
    changeIncome(value, index) {
      this.changeBusinessIncome({ index: index, value: value });
    }
  }
};
</script>
