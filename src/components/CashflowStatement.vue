<template>
  <div>
    <h2>Income Statement</h2>
    <section id="cashflow-statement-area">
      <cashflow-statement-income />
      <cashflow-statement-income-summary />

      <cashflow-statement-expenses />
      <cashflow-statement-expenses-summary />
    </section>
  </div>
</template>

<script>
import CashflowStatementIncome from "./CashflowStatementIncome";
import CashflowStatementIncomeSummary from "./CashflowStatementIncomeSummary";
import CashflowStatementExpenses from "./CashflowStatementExpenses";
import CashflowStatementExpensesSummary from "./CashflowStatementExpensesSummary";

export default {
  components: {
    CashflowStatementIncome,
    CashflowStatementIncomeSummary,
    CashflowStatementExpenses,
    CashflowStatementExpensesSummary
  }
};
</script>

<style lang="scss">
.column-header th {
  border-bottom: 2px solid #000;
}
#auditor-area sub {
  display: block;
  text-align: center;
}
#passive-income,
#total-income,
#total-expenses {
  font-size: 1rem;
}

/* Thanks grid.layoutit.com?id=D1i1b4l */
#cashflow-statement-area {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "income income-summary" "expenses expense-summary";
  grid-column-gap: 1%;
}

#income-summary,
#expense-summary {
  font-family: sans-serif;
  border-bottom: 4px solid #000;
  display: flex;
  flex-direction: column;
  .total-io {
    padding: 0 0 30px 40%;
  }
}
</style>