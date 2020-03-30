<template>
  <item-input-with-mystery-meat>
    <template #input>
      <input type="text" autocomplete="off" :value="stock.name" @input="changeName" />
    </template>
    <template #right-2>
      <a :class="stockClasses" title="Edit this STTTET" @click="openModal"><img src="@/images/dynamic_feed.svg"/></a>
    </template>
    <template #right-1>
      <a v-if="showAddButton" class="right-1" title="Add a row" @click="addStock"><img src="@/images/add.svg"/></a>
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
    ...mapState("investments", ["stocks"]),
    ...mapGetters("investments", ["getStock"]),
    stock() {
      return this.getStock(this.index);
    },
    showAddButton() {
      return this.index === this.stocks.length - 1;
    },
    stockClasses() {
      return {
        "right-1": !this.showAddButton,
        "right-2": this.showAddButton
      };
    }
  },
  methods: {
    ...mapMutations("investments", ["changeStockName", "addStock", "showStockModal"]),
    changeName(event) {
      this.changeStockName({ index: this.index, value: event.target.value });
    },
    openModal() {
      this.showStockModal(this.index);
    }
  }
};
</script>
