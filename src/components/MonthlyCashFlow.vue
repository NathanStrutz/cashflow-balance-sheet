<template>
  <div id="monthly-cash-flow-area">
    <div class="total-io">
      <label for="monthly-cash-flow">
        Monthly Cash Flow:
        <sub>(Pay Check)</sub>
      </label>
      <dollar-format-input id="monthly-cash-flow" :value="cashFlow" readonly />
    </div>
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
  display: flex;
  flex-direction: column;
  margin: 15px 0 15px 50%;

  .total-io {
    padding-left: 40%;
    input {
      flex: 1 0 110px;
    }
  }
}
</style>
