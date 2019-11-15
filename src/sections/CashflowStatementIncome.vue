<template>
	<div class="income">
		<h3 class="column-title-bar">Income</h3>
		<table class="line-inputs">
			<thead>
				<tr class="column-header">
					<th>Description</th>
					<th>Cash Flow</th>
				</tr>
			</thead>
			<tbody>
				<state-connected-input category="income" title="Salary" item="salary" change="changeSalary" />
				<state-connected-input category="income" title="Interest" item="interest" change="changeInterest" />
				<state-connected-input category="income" item="interest2" change="changeInterest2" />
			</tbody>
			<income-real-estate />
			<income-businesses />
		</table>
	</div>
</template>

<script>
import StateConnectedInput from "@/components/StateConnectedInput.vue";
import BlankLineInput from "@/components/BlankLineInput.vue";
import { mapState, mapMutations } from "vuex";

import IncomeRealEstate from "./income/IncomeRealEstate.vue";
import IncomeBusinesses from "./income/IncomeBusinesses.vue";

export default {
	components: {
		StateConnectedInput,
		IncomeRealEstate,
		IncomeBusinesses
	},
	computed: {},
	methods: {}
};
</script>

<style lang="scss">
#income {
	grid-area: income;
}
</style>
