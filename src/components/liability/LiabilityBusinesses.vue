<template>
  <tbody>
    <tr v-for="(business, index) in businesses" :key="index" :class="!index ? 'line-input' : 'blank-line-input'">
      <td v-if="!index">
        <label>Liability: (Business)</label>
      </td>
      <td :colspan="!index ? 1 : 2">
        <input type="text" :value="business.name" @input="changeName($event, index)" />
      </td>
      <td>
        <input type="text" class="numeric" :value="business.liability" @input="changeLiability($event, index)" />
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
    ...mapMutations("investments", ["changeBusinessName", "changeBusinessLiability"]),

    changeName(e, index) {
      this.changeBusinessName({ index: index, value: e.target.value });
    },
    changeLiability(e, index) {
      this.changeBusinessLiability({ index: index, value: Number(e.target.value) });
    }
  }
};
</script>
