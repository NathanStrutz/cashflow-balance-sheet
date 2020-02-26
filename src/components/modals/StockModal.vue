<template>
  <modal-window @close="close">
    <template #header>Stock</template>
    <template #body> a b c d e f tg ha ai hg jk kl l m n o p q</template>
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
    ...mapGetters("investments", ["getStock"]),
    item() {
      return this.getStock(this.index);
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