<template>
  <modal-window @close="close">
    <template #header>Business</template>
    <template #body>business buiseinss e busellgeutsnsnsnsss!</template>
  </modal-window>
</template>

<script>
import { mapGetters } from "vuex";
import ModalWindow from "@/components/application/ModalWindow.vue";

export default {
  components: { ModalWindow },
  props: {
    index: { type: Number, default: -1 }
  },
  computed: {
    ...mapGetters("investments", ["getBusiness"]),
    item() {
      return this.getBusiness(this.index);
    }
  },
  methods: {
    close() {
      this.$store.commit("investments/closeModal");
    }
  }
};
</script>

<style lang="scss">
</style>