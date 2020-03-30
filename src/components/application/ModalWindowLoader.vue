<template>
  <component v-if="showModal" :is="whichModal" :index="modal.index" />
</template>

<script>
import { mapMutations, mapState } from "vuex";
import BusinessModal from "@/components/ratrace/modals/BusinessModal.vue";
import RealEstateModal from "@/components/ratrace/modals/RealEstateModal.vue";
import StockModal from "@/components/ratrace/modals/StockModal.vue";

export default {
  components: { BusinessModal, RealEstateModal, StockModal },
  computed: {
    ...mapState("investments", ["modal"]),
    showModal() {
      return this.modal.show;
    },
    whichModal() {
      switch (this.modal.type) {
        case "realEstate":
          return RealEstateModal;
        case "business":
          return BusinessModal;
        case "stock":
          return StockModal;
        default:
          console.error("Attempted to pop open a modal type that does not exist");
          return null;
      }
    }
  }
};
</script>

<style>
</style>