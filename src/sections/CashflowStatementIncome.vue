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
				<tr class="line-input">
					<td>
						<label>Dividends:</label>
						<input type="text" id="dividends" />
					</td>
					<td>
						<input type="text" class="income" />
					</td>
				</tr>
				<tr class="blank-line-input">
					<td>
						<input type="text" id="salary" />
					</td>
					<td>
						<input type="text" class="income" />
					</td>
				</tr>
				<tr class="line-input real-estate">
					<td>
						<label>Real Estate:</label>
						<input type="text" />
					</td>
					<td>
						<input type="text" class="income" />
					</td>
				</tr>
				<tr class="blank-line-input real-estate">
					<td>
						<input type="text" />
					</td>
					<td>
						<input type="text" class="income" />
					</td>
				</tr>
				<tr class="blank-line-input real-estate">
					<td>
						<input type="text" />
					</td>
					<td>
						<input type="text" class="income" />
					</td>
				</tr>
				<tr class="blank-line-input real-estate">
					<td>
						<input type="text" />
					</td>
					<td>
						<input type="text" class="income" />
					</td>
				</tr>
				<tr class="line-input real-estate">
					<td>
						<label>Businesses:</label>
						<input type="text" />
					</td>
					<td>
						<input type="text" class="income" />
					</td>
				</tr>
				<tr class="blank-line-input real-estate">
					<td>
						<input type="text" />
					</td>
					<td>
						<input type="text" class="income" />
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import StateConnectedInput from "@/components/StateConnectedInput.vue";
import BlankLineInput from "@/components/BlankLineInput.vue";
import { mapState, mapMutations } from "vuex";

export default {
	components: {
		StateConnectedInput
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