<template>
  <span class="hover-inline-buttons">
    <input type="text" autocomplete="off" :value="property.name" @input="changeName($event, index)" />
    <a :class="propertyClasses" title="Edit this property" @click="openModal"><img src="@/images/home_work.svg"/></a>
    <a v-if="showAddButton" class="add-row-button right-1" title="Add a row" @click="addRealEstate"><img src="@/images/add.svg"/></a>
  </span>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
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
        "add-row-button": true,
        "right-1": !this.showAddButton,
        "right-2": this.showAddButton
      };
    }
  },
  methods: {
    ...mapMutations("investments", ["changeRealEstateName", "addRealEstate", "showRealEstateModal"]),
    changeName(e) {
      this.changeRealEstateName({ index: this.index, value: e.target.value });
    },
    openModal() {
      this.showRealEstateModal(this.index);
    }
  }
};
</script>

<style lang="scss" scoped>
input .add-row-button {
  filter: alpha(opacity=0);
  transition: all 0.2s ease-in-out;
  cursor: ne-resize;
}
input:hover .add-row-button {
  filter: alpha(opacity=1);
  transition: all 0.2s ease-in-out;
}
.hover-inline-buttons {
  position: relative;
  width: 100%;
  // display: flex;

  & a,
  & button {
    opacity: 0;
    transition: all 0.2s ease-in-out;
    position: absolute;
    cursor: pointer;

    &.right-1 {
      position: absolute;
      right: 0;
    }
    &.right-2 {
      position: absolute;
      right: 24px;
    }
    &.left-1 {
      position: absolute;
      left: 3px;
    }
    &.left-2 {
      position: absolute;
      left: 24px;
    }
  }

  &:hover a,
  &:hover button {
    opacity: 1;
  }
}
</style>
