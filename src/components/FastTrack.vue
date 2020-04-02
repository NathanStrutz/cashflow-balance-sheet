<template>
  <div id="fast-track">
    <header-menu />
    <fast-track-page />
  </div>
</template>

<script>
import HeaderMenu from "@/components/application/HeaderMenu.vue";
import FastTrackPage from "@/components/fasttrack/FastTrackPage.vue";

export default {
  components: { HeaderMenu, FastTrackPage }
};
</script>

<style lang="scss">
#fast-track {
  display: flex;
  justify-content: space-between;
}
</style>
