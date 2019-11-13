<template>
  <div class="line-input">
    <input type="text" :value="property.name" @input="changeName" />
    <input type="text" class="numeric" :value="property.downPayment" @input="changeDownPayment" />
    <input type="text" class="numeric" :value="property.cost" @input="changeCost" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  props: {
    index: Number
  },
  computed: {
    ...mapGetters("investments", ["getRealEstate"]),
    property() {
      return this.getRealEstate(this.index);
    }
  },
  methods: {
    changeName(e) {
      this.$store.commit("investments/changeRealEstateName", { index: this.index, value: e.target.value });
    },
    changeDownPayment(e) {
      this.$store.commit("investments/changeRealEstateDownPayment", { index: this.index, value: e.target.value });
    },
    changeCost(e) {
      this.$store.commit("investments/changeRealEstateCost", { index: this.index, value: e.target.value });
    }
  }
};
</script>
