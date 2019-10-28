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
				<line-input
					title="Salary"
					:text="income.salary.note"
					@updateText="val => changeSalary({ note: val })"
					:value="income.salary.value"
					@updateValue="val => changeSalary({ value: val })"
				/>
				<tr class="line-input">
					<td>
						<label>Interest:</label>
						<input type="text" id="interest" />
					</td>
					<td>
						<input type="text" class="income" />
					</td>
				</tr>
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
import LineInput from "@/components/LineInput.vue";
import BlankLineInput from "@/components/BlankLineInput.vue";
import { mapState, mapMutations } from "vuex";

export default {
	components: {
		LineInput,
		BlankLineInput
	},
	computed: {
		...mapState(["income"])
	},
	methods: {
		...mapMutations(["changeSalary"])
	}
};
</script>

<style lang="scss">
#income {
	grid-area: income;
}
</style>