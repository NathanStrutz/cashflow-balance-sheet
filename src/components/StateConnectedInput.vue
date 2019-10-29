<template>
	<line-input :title="title" :text="data.note" :value="data.value" @updateText="changeText" @updateValue="changeValue" />
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
		change: String
	},
	computed: {
		data() {
			return this.$store.state[this.category][this.item];
		}
	},
	methods: {
		changeText(e) {
			this.$store.commit(this.category + "/" + this.change, { note: e });
		},
		changeValue(e) {
			this.$store.commit(this.category + "/" + this.change, { value: Number(e) });
		}
	}
};
</script>
