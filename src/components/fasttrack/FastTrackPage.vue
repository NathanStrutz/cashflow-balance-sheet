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
@media (min-width: 801px) {
  section#fasttrack-upper {
    display: grid;
    grid-template-columns: 50fr 5fr 50fr;
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  #fast-track-congratulations {
    grid-area: 1 / 1 / 2 / 2;
  }
  #your-buyout {
    grid-area: 1 / 2 / 2 / 4;
  }
  #how-to-win {
    grid-area: 2 / 1 / 3 / 3;
  }
  #explanation-of-100x {
    grid-area: 2 / 3 / 3 / 4;
  }
}

@media (max-width: 800px) {
  section#fasttrack-upper {
    display: block;
  }
  #fast-track-congratulations {
    margin: 20px 0;
  }
  #your-buyout {
    margin: 20px 0;
  }
  #how-to-win {
    margin: 20px 0;
  }
  #explanation-of-100x {
    margin: 20px 0;
  }
}
</style>