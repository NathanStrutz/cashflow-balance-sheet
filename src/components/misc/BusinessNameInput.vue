<template>
  <item-input-with-mystery-meat>
    <template #input>
      <input type="text" autocomplete="off" :value="business.name" @input="changeName" />
    </template>
    <template #right-2>
      <a :class="propertyClasses" title="Edit this business" @click="openModal"><img src="@/images/store_mall_directory.svg"/></a>
    </template>
    <template #right-1>
      <a v-if="showAddButton" class="add-row-button right-1" title="Add a row" @click="addBusiness"><img src="@/images/add.svg"/></a>
    </template>
  </item-input-with-mystery-meat>
</template>

<script>
import ItemInputWithMysteryMeat from "./ItemInputWithMysteryMeat.vue";
import { mapGetters, mapState, mapMutations } from "vuex";

export default {
  components: { ItemInputWithMysteryMeat },
  props: {
    index: Number
  },
  computed: {
    ...mapState("investments", ["businesses"]),
    ...mapGetters("investments", ["getBusiness"]),
    business() {
      return this.getBusiness(this.index);
    },
    showAddButton() {
      return this.index === this.businesses.length - 1;
    },
    propertyClasses() {
      return {
        "add-row-button": true,
        "right-1": !this.showAddButton,
        "right-2": this.showAddButton
      };
    }
  },
  methods: {
    ...mapMutations("investments", ["changeBusinessName", "addBusiness", "showBusinessModal"]),
    changeName(event) {
      this.changeBusinessName({ index: this.index, value: event.target.value });
    },
    openModal() {
      this.showBusinessModal(this.index);
    }
  }
};
</script>
