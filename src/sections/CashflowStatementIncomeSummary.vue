<template>
	<div id="income-summary">
		<div id="auditor-area">
			<div class="title-input">
				<label>Auditor</label>
				<input type="text" :value="auditor" id="auditor" />
			</div>
			<sub>Person on your right</sub>
		</div>
		<div id="passive-income-area">
			<div class="passive-income-area">
				<label>Passive Income =</label>
				<input type="text" id="passive-income" :value="passiveIncome" class="numeric" />
			</div>
			<sub>(Cash flows from Interest + Dividends + Real Estate + Businesses</sub>
		</div>
		<div class="total-io">
			<label for="total-income">Total Income:</label>
			<input type="text" id="total-income" :value="totalIncome" class="numeric" />
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters(["auditor", "passiveIncome", "totalIncome"])
	}
};
</script>

<style lang="scss">
#auditor-area sub {
	display: block;
	text-align: center;
}

#income-summary {
	justify-content: space-between;
	grid-area: income-summary;
}

#passive-income-area .passive-income-area {
	/* the #area is the upper section, the .area is two horizontal neighbors */
	display: flex;
	flex-direction: row;
	flex: 1 1 100px;
	align-content: stretch;
}
#passive-income-area .passive-income-area label {
	flex: 0 0 132px;
	white-space: nowrap;
}
#passive-income-area .passive-income-area input {
	flex: 1 1 auto;
}
</style>