<template>
  <div class="line-input">
    <business-name-input :index="index" />
    <dollar-format-input :value="business.downPayment" @input="changeDownPayment($event)" />
    <dollar-format-input :value="business.cost" @input="changeCost($event)" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import DollarFormatInput from "@/components/misc/DollarFormatInput.vue";
import BusinessNameInput from "@/components/misc/BusinessNameInput.vue";

export default {
  components: { DollarFormatInput, BusinessNameInput },
  props: {
    index: Number
  },
  computed: {
    ...mapGetters("investments", ["getBusiness"]),
    business() {
      return this.getBusiness(this.index);
    }
  },
  methods: {
    changeName(e) {
      this.$store.commit("investments/changeBusinessName", { index: this.index, value: e.target.value });
    },
    changeDownPayment(value) {
      this.$store.commit("investments/changeBusinessDownPayment", { index: this.index, value: value });
    },
    changeCost(value) {
      this.$store.commit("investments/changeBusinessCost", { index: this.index, value: value });
    }
  }
};
</script>
