<template>
  <section class="area">
    <title-input :value="player" @input="changePlayer($event)" :tabindex="2">Player</title-input>
    <div id="auditor-area">
      <title-input :value="auditor" @input="changeAuditor($event)" :tabindex="3">Auditor</title-input>
      <sub>Person on your right</sub>
    </div>
    <section class="title-box">
      <h3>Your Buyout</h3>
      <table>
        <tr>
          <td>Your Passive Income (from other side) <sub>(Rounded to Nearest Thousand Dollars)</sub></td>
          <td>=</td>
          <td><dollar-format-input :value="beginningCashFlowDayIncome / 100" readonly /></td>
        </tr>
        <tr>
          <td>Buyout Multiple</td>
          <td colspan="2" class="numeric">X 100</td>
        </tr>
        <tr>
          <td>Your Beginning CASHFLOW Day Income</sub></td>
          <td>=</td>
          <td><dollar-format-input :value="beginningCashFlowDayIncome" readonly /></td>
        </tr>
      </table>
    </section>
  </section>
</template>

<script>
import TitleInput from "@/components/misc/TitleInput.vue";
import DollarFormatInput from "@/components/misc/DollarFormatInput.vue";
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  components: { TitleInput, DollarFormatInput },
  computed: {
    ...mapState("meta", ["player", "auditor"]),
    ...mapGetters("fasttrack", ["beginningCashFlowDayIncome"])
  },
  methods: {
    ...mapMutations("meta", ["changePlayer", "changeAuditor"])
  }
};
</script>

<style lang="scss" scoped>
.area {
  display: flex;
  flex-direction: column;
  align-content: space-between;

  /* I can't figure out how to flex the items without improperly stretching the Player title */
  /* So pleas forgive this travesty */
  > :nth-child(1),
  > :nth-child(2) {
    margin-bottom: 70px;
  }
}
</style>

<style lang="scss">
.title-box {
  border: 1px solid black;

  h3 {
    margin: 0;
    font-size: 1.7rem;
    background: #000;
    color: #fff;
    text-align: center;
    font-style: italic;
    padding: 4px;
  }
  table {
    font-family: sans-serif;
    padding: 4px 4px 0;
    width: 100%;

    td {
      font-weight: bold;
      padding-bottom: 10px;
    }
  }
  sub {
    font-weight: lighter;
    display: block;
  }
}
</style>
