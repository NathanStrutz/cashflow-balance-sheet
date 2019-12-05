<template>
  <tbody>
    <tr v-for="(business, index) in businesses" :key="index" :class="!index ? 'line-input' : 'blank-line-input'">
      <td v-if="!index">
        <label>Liability: (Business)</label>
      </td>
      <td :colspan="!index ? 1 : 2">
        <input type="text" autocomplete="off" :value="business.name" @input="changeName($event, index)" />
      </td>
      <td>
        <dollar-format-input :value="business.liability" @input="changeLiability($event, index)" />
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
    ...mapMutations("investments", ["changeBusinessName", "changeBusinessLiability"]),

    changeName(e, index) {
      this.changeBusinessName({ index: index, value: e.target.value });
    },
    changeLiability(value, index) {
      this.changeBusinessLiability({ index: index, value: value });
    }
  }
};
</script>
