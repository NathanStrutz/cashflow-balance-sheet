<template>
  <item-input-with-mystery-meat>
    <template #input>
      <input type="text" autocomplete="off" :value="property.name" @input="changeName" />
    </template>
    <template #right-2>
      <a :class="propertyClasses" title="Edit this property" @click="openModal"><img src="@/images/home_work.svg"/></a>
    </template>
    <template #right-1>
      <a v-if="showAddButton" class="right-1" title="Add a row" @click="addRealEstate"><img src="@/images/add.svg"/></a>
    </template>
  </item-input-with-mystery-meat>
</template>

<script>
import ItemInputWithMysteryMeat from "./ItemInputWithMysteryMeat.vue";
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  components: { ItemInputWithMysteryMeat },
  props: {
    index: { type: Number, required: true }
  },
  computed: {
    ...mapState("investments", ["realEstate"]),
    ...mapGetters("investments", ["getRealEstate"]),
    property() {
      return this.getRealEstate(this.index);
    },
    showAddButton() {
      return this.index === this.realEstate.length - 1;
    },
    propertyClasses() {
      return {
        "right-1": !this.showAddButton,
        "right-2": this.showAddButton
      };
    }
  },
  methods: {
    ...mapMutations("investments", ["changeRealEstateName", "addRealEstate", "showRealEstateModal"]),
    changeName(event) {
      this.changeRealEstateName({ index: this.index, value: event.target.value });
    },
    openModal() {
      this.showRealEstateModal(this.index);
    }
  }
};
</script>
