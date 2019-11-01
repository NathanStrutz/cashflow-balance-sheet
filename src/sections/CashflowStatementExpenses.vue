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
				<line-input title="Child Expenses" :text="childNote" @updateText="changeChildNote" :value="childExpenses" readonly />
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
import LineInput from "@/components/LineInput.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
	components: {
		StateConnectedInput,
		LineInput
	},
	computed: {
		...mapGetters(["childExpenses"]),
		childNote() {
			return this.$store.state.expenses.children.note;
		}
	},
	methods: {
		...mapMutations(["changeChildNote"])
	}
};
</script>

<style lang="scss">
#expenses {
	grid-area: expenses;
}
</style>