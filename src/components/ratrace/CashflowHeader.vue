<template>
  <div>
    <header>
      <title-input :value="profession" @input="changeProfession($event)" :tabindex="1">Profession</title-input>
      <title-input :value="player" @input="changePlayer($event)" :tabindex="2">Player</title-input>
      <header-menu />
    </header>
    <p>
      Goal: To get out of the Rat Race and onto the Fast Track by building up your Passive Income to be greater than your Total Expenses
    </p>
  </div>
</template>

<script>
import TitleInput from "@/components/misc/TitleInput.vue";
import HeaderMenu from "@/components/application/HeaderMenu.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: { TitleInput, HeaderMenu },
  computed: {
    ...mapState("meta", ["profession", "player"])
  },
  methods: {
    ...mapMutations("meta", ["changeProfession", "changePlayer"])
  }
};
</script>

<style lang="scss">
header {
  display: flex;
  flex: 1 0 100%;
  justify-content: space-evenly;
}
header > *:not(:last-child) {
  padding-right: 1rem;
}

header ~ p {
  font-size: 0.875rem;
}
</style>
