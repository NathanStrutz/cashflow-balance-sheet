<template>
  <div id="liabilities">
    <h3 class="column-title-bar">Liabilities</h3>
    <table id="liability-list" class="line-inputs">
      <tbody>
        <state-connected-value-input title="Home Mortgage" category="liabilities" item="mortgage" change="changeMortgage" />
        <state-connected-value-input title="School Loans" category="liabilities" item="schoolLoan" change="changeSchoolLoan" />
        <state-connected-value-input title="Car Loans" category="liabilities" item="carLoan" change="changeCarLoan" />
        <state-connected-value-input title="Credit Cards" category="liabilities" item="creditCard" change="changeCreditCard" />
        <state-connected-value-input title="Retail Debt" category="liabilities" item="retail" change="changeRetail" />
      </tbody>
      <liability-real-estate />
      <liability-businesses />
      <tbody>
        <state-connected-value-input title="Bank Loan" category="liabilities" item="bankLoan" change="changeBankLoan" />
      </tbody>
    </table>
  </div>
</template>

<script>
import StateConnectedValueInput from "@/components/misc/StateConnectedValueInput.vue";
import LiabilityRealEstate from "./liabilities/LiabilityRealEstate.vue";
import LiabilityBusinesses from "./liabilities/LiabilityBusinesses.vue";

export default {
  components: { StateConnectedValueInput, LiabilityRealEstate, LiabilityBusinesses }
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