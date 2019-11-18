<template>
	<line-input :title="title" :value="value" @updateValue="changeValue" :hasText="false" />
</template>

<script>
import { mapState, mapMutations } from "vuex";
import LineInput from "./LineInput.vue";

export default {
	components: {
		LineInput
	},
	props: {
		title: String,
		category: String,
		item: String,
		change: String // State change method for the item
	},
	computed: {
		/** the node for this category/item */
		value() {
			return this.$store.state[this.category][this.item];
		}
	},
	methods: {
		changeValue(e) {
			this.$store.commit(this.category + "/" + this.change, { value: Number(e) });
		}
	}
};
</script>
