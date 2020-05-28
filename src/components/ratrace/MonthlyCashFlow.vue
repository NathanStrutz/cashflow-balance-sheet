<template>
  <div id="monthly-cash-flow-area">
    <label for="monthly-cash-flow">
      Monthly Cash Flow:
      <sub>(Pay Check)</sub>
    </label>
    <dollar-format-input id="monthly-cash-flow" :value="cashFlow" readonly />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DollarFormatInput from "@/components/misc/DollarFormatInput.vue";

export default {
  components: { DollarFormatInput },
  computed: {
    ...mapGetters(["cashFlow"])
  }
};
</script>

<style lang="scss">
#monthly-cash-flow {
  font-size: 1.2rem;
}

#monthly-cash-flow-area {
  font-weight: 800;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-end;

  input {
    flex: 1 0 110px;
  }

  label {
    flex: 0 0 110px;
  }
  sub {
    display: block;
    color: #666;
  }
}
</style>
