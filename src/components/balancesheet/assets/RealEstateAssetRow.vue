<template>
  <div class="line-input">
    <input type="text" autocomplete="off" :value="property.name" @input="changeName" />
    <dollar-format-input :value="property.downPayment" @input="changeDownPayment($event)" />
    <dollar-format-input :value="property.cost" @input="changeCost($event)" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import DollarFormatInput from "@/components/misc/DollarFormatInput.vue";

export default {
  components: { DollarFormatInput },
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
    changeDownPayment(value) {
      this.$store.commit("investments/changeRealEstateDownPayment", { index: this.index, value: value });
    },
    changeCost(value) {
      this.$store.commit("investments/changeRealEstateCost", { index: this.index, value: value });
    }
  }
};
</script>
