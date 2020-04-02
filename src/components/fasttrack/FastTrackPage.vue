<template>
  <div>
    <section id="fasttrack-upper">
      <div id="fast-track-congratulations">
        <fast-track-congratulations />
      </div>
      <div id="your-buyout">
        <your-buyout />
      </div>
      <div id="how-to-win">
        <how-to-win />
      </div>
      <div id="explanation-of-100x">
        <explanation-of-100x />
      </div>
    </section>
    <main>
      <income-record-area />
    </main>
  </div>
</template>

<script>
import FastTrackCongratulations from "./gamesetup/FastTrackCongratulations.vue";
import YourBuyout from "./gamesetup/YourBuyout.vue";
import HowToWin from "./gamesetup/HowToWin.vue";
import ExplanationOf100x from "./gamesetup/ExplanationOf100x.vue";
import IncomeRecordArea from "./incomerecord/IncomeRecordArea.vue";

export default {
  components: {
    FastTrackCongratulations,
    YourBuyout,
    HowToWin,
    ExplanationOf100x,
    IncomeRecordArea
  }
};
</script>

<style>
section#fasttrack-upper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "fast-track-congratulations your-buyout"
    "how-to-win explanation-of-100x";
}

@media (max-width: 800px) {
  section#fasttrack-upper {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "fast-track-congratulations"
      "your-buyout"
      "how-to-win"
      "explanation-of-100x";
  }
}
</style>