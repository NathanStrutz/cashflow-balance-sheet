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
			</tbody>
			<liability-real-estate />
			<liability-businesses />
			<tbody>
				<state-connected-input title="Bank Loan" category="liabilities" item="bankLoan" change="changeBankLoan" />
			</tbody>
		</table>
	</div>
</template>

<script>
import StateConnectedInput from "./misc/StateConnectedInput.vue";
import LiabilityRealEstate from "./liability/LiabilityRealEstate.vue";
import LiabilityBusinesses from "./liability/LiabilityBusinesses.vue";

export default {
	components: { StateConnectedInput, LiabilityRealEstate, LiabilityBusinesses }
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