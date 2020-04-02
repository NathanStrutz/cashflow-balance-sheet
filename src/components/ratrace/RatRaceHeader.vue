<template>
  <div>
    <header>
      <title-input :value="profession" @input="changeProfession($event)" :tabindex="1">Profession</title-input>
      <title-input :value="player" @input="changePlayer($event)" :tabindex="2">Player</title-input>
    </header>
    <p>
      Goal: To get out of the Rat Race and onto the Fast Track by building up your Passive Income to be greater than your Total Expenses
    </p>
  </div>
</template>

<script>
import TitleInput from "@/components/misc/TitleInput.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: { TitleInput },
  computed: {
    ...mapState("meta", ["profession", "player"])
  },
  methods: {
    ...mapMutations("meta", ["changeProfession", "changePlayer"])
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-wrap: wrap;

  > *:not(:last-child) {
    // border: 1px solid red;
    padding-right: 1rem;
  }

  > * {
    flex: 1 1 350px;
    min-width: 350px;
  }
}
// header > *:not(:last-child) {
//   padding-right: 1rem;
// }
// header > * {
//   min-width: 600px;
// }

header ~ p {
  font-size: 0.875rem;
}
</style>
