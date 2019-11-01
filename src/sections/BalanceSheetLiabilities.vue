<template>
	<div id="liabilities">
		<h3 class="column-title-bar">Liabilities</h3>
		<table id="liability-list" class="line-inputs">
			<tbody>
				<state-connected-input title="Home Mortgage" category="liabilities" item="mortgage" change="changeMortgage" />
				<state-connected-input title="School Loans" category="liabilities" item="schoolLoan" change="changeSchoolLoan" />
				<state-connected-input title="Car Loans" category="liabilities" item="carLoan" change="changeCarLoan" />
				<state-connected-input title="Credit Cards" category="liabilities" item="creditCard" change="changeCreditCard" />
				<state-connected-input title="Retail Debt" category="liabilities" item="retail" change="changeRetail" />
				<tr class="line-input">
					<td>
						<label>RE Mortgage:</label>
					</td>
					<td colspan="2">
						<input type="text" class="numeric" />
					</td>
				</tr>
				<tr class="blank-line-input">
					<td colspan="2">
						<input type="text" class="numeric" />
					</td>
					<td>
						<input type="text" class="numeric" />
					</td>
				</tr>
				<tr class="blank-line-input">
					<td colspan="2">
						<input type="text" class="numeric" />
					</td>
					<td>
						<input type="text" class="numeric" />
					</td>
				</tr>
				<tr class="blank-line-input">
					<td colspan="2">
						<input type="text" class="numeric" />
					</td>
					<td>
						<input type="text" class="numeric" />
					</td>
				</tr>
				<tr class="line-input">
					<td>
						<label>Liability: (Business)</label>
					</td>
					<td>
						<input type="text" class="numeric" />
					</td>
					<td>
						<input type="text" class="numeric" />
					</td>
				</tr>
				<tr class="blank-line-input">
					<td colspan="2">
						<input type="text" class="numeric" />
					</td>
					<td>
						<input type="text" class="numeric" />
					</td>
				</tr>
				<state-connected-input title="Bank Loan" category="liabilities" item="bankLoan" change="changeBankLoan" />
			</tbody>
		</table>
	</div>
</template>

<script>
import StateConnectedInput from "@/components/StateConnectedInput.vue";

export default {
	components: { StateConnectedInput }
};
</script>

<style lang="scss">
#liabilities {
	grid-area: liabilities;
}
table#liability-list {
	border: 0;
}
table#liability-list tbody tr td:first-child {
	width: 130px;
}
</style>