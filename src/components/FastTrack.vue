<template>
  <div id="fast-track">
    <header-menu />
  </div>
</template>

<script>
import HeaderMenu from "@/components/application/HeaderMenu.vue";

export default {
  components: { HeaderMenu }
};
</script>

<style lang="scss">
#fast-track {
  display: flex;
  justify-content: space-between;
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   width: 200px;
}
</style>
