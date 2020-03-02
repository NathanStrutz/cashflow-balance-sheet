<template>
  <div id="income-summary">
    <div id="auditor-area">
      <title-input :value="auditor" @input="changeAuditor($event)" :tabindex="3">Auditor</title-input>
      <sub>Person on your right</sub>
    </div>
    <div id="passive-income-area">
      <div class="passive-income-area">
        <label>Passive Income =</label>
        <dollar-format-input id="passive-income" :value="passiveIncome" readonly />
      </div>
      <sub>(Cash flows from Interest + Dividends + Real Estate + Businesses</sub>
    </div>
    <div class="total-io">
      <label for="total-income">Total Income:</label>
      <dollar-format-input id="total-income" :value="totalIncome" readonly />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";
import DollarFormatInput from "@/components/misc/DollarFormatInput.vue";
import TitleInput from "@/components/misc/TitleInput.vue";

export default {
  components: { DollarFormatInput, TitleInput },
  computed: {
    ...mapState("meta", ["auditor"]),
    ...mapGetters(["passiveIncome", "totalIncome"])
  },
  methods: {
    ...mapMutations("meta", ["changeAuditor"])
  }
};
</script>

<style lang="scss">
#auditor-area sub {
  display: block;
  text-align: center;
}

#income-summary {
  justify-content: space-between;
  grid-area: income-summary;
}

#passive-income-area .passive-income-area {
  /* the #area is the upper section, the .area is two horizontal neighbors */
  display: flex;
  flex-direction: row;
  flex: 1 1 100px;
  align-content: stretch;
}
#passive-income-area .passive-income-area label {
  flex: 0 0 132px;
  white-space: nowrap;
}
#passive-income-area .passive-income-area input {
  flex: 1 1 auto;
}
</style>