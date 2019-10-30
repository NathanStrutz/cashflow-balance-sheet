<template>
	<div class="expenses">
		<h3 class="column-title-bar">Expenses</h3>
		<table class="line-inputs">
			<tbody>
				<state-connected-input title="Taxes" category="expenses" item="taxes" change="changeTaxes" />
				<state-connected-input title="Home Mortgage" category="expenses" item="mortgage" change="changeMortgage" />
				<state-connected-input title="School Loan Payment" category="expenses" item="schoolLoan" change="changeSchoolLoan" />
				<state-connected-input title="Car Payment" category="expenses" item="carLoan" change="changeCarLoan" />
				<state-connected-input title="Credit Card Payment" category="expenses" item="creditCard" change="changeCreditCard" />
				<state-connected-input title="Retail Payment" category="expenses" item="retail" change="changeRetail" />
				<state-connected-input title="Other Expenses" category="expenses" item="other" change="changeOther" />
				<tr class="line-input">
					<td>
						<label>Child Expenses:</label>
						<input type="text" />
					</td>
					<td>
						<input type="text" class="expense" id="child-expenses" />
					</td>
				</tr>
				<state-connected-input title="Bank Loan Payment" category="expenses" item="bankLoan" change="changeBankLoan" />
				<tr class="blank-line-input">
					<td>
						<input type="text" />
					</td>
					<td>
						<input type="text" class="expense" />
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import StateConnectedInput from "@/components/StateConnectedInput.vue";

export default {
	components: {
		StateConnectedInput
	}
};
</script>

<style lang="scss">
#expenses {
	grid-area: expenses;
}
</style>