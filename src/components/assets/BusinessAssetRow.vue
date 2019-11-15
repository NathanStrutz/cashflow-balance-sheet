<template>
	<div class="line-input">
		<input type="text" :value="business.name" @input="changeName" />
		<input type="text" class="numeric" :value="business.downPayment" @input="changeDownPayment" />
		<input type="text" class="numeric" :value="business.cost" @input="changeCost" />
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
	props: {
		index: Number
	},
	computed: {
		...mapGetters("investments", ["getBusiness"]),
		business() {
			return this.getBusiness(this.index);
		}
	},
	methods: {
		changeName(e) {
			this.$store.commit("investments/changeBusinessName", { index: this.index, value: e.target.value });
		},
		changeDownPayment(e) {
			this.$store.commit("investments/changeBusinessDownPayment", { index: this.index, value: e.target.value });
		},
		changeCost(e) {
			this.$store.commit("investments/changeBusinessCost", { index: this.index, value: e.target.value });
		}
	}
};
</script>
