<template>
	<div id="assets">
		<h3 class="column-title-bar">Assets</h3>
		<div id="asset-list">
			<div class="line-input">
				<label for="savings">Savings:</label>
				<input type="text" id="savings" class="numeric" :value="savings" @input="changeSavings($event.target.value)" />
			</div>
			<div class="line-input all-text">
				<div>Stocks/Mutual's/CDs</div>
				<div>No. of Shares:</div>
				<div>Cost/Share:</div>
			</div>
			<div class="line-input">
				<input type="text" />
				<input type="text" class="numeric" />
				<input type="text" class="numeric" />
			</div>
			<div class="line-input">
				<input type="text" />
				<input type="text" class="numeric" />
				<input type="text" class="numeric" />
			</div>
			<div class="line-input all-text">
				<div>Real Estate:</div>
				<div>Down Pay:</div>
				<div>Cost:</div>
			</div>
			<div class="line-input">
				<input type="text" />
				<input type="text" class="numeric" />
				<input type="text" class="numeric" />
			</div>
			<div class="line-input">
				<input type="text" />
				<input type="text" class="numeric" />
				<input type="text" class="numeric" />
			</div>
			<div class="line-input">
				<input type="text" />
				<input type="text" class="numeric" />
				<input type="text" class="numeric" />
			</div>
			<div class="line-input">
				<input type="text" />
				<input type="text" class="numeric" />
				<input type="text" class="numeric" />
			</div>
			<div class="line-input all-text">
				<div>Business:</div>
				<div>Down Pay:</div>
				<div>Cost:</div>
			</div>
			<div class="line-input">
				<input type="text" />
				<input type="text" class="numeric" />
				<input type="text" class="numeric" />
			</div>
			<div class="line-input">
				<input type="text" />
				<input type="text" class="numeric" />
				<input type="text" class="numeric" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
	computed: {
		...mapState("assets", ["savings"])
	},
	methods: {
		...mapMutations("assets", ["changeSavings"])
	}
};
</script>

<style lang="scss">
#assets {
	grid-area: assets;
}

#asset-list {
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	justify-content: flex-start;
}

#asset-list > * {
	/* In relation to its parent */
	flex: 1 1 auto;
	margin: 7px;
	/* in relation to its children */
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
}
#asset-list > * > * {
	flex: 1 1 auto;
	white-space: nowrap;
}
</style>