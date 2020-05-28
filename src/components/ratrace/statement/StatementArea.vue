<template>
  <div>
    <h2>Income Statement</h2>
    <section id="statement-area">
      <statement-income />
      <statement-income-summary />

      <statement-expenses />
      <statement-expenses-summary />
    </section>
  </div>
</template>

<script>
import StatementIncome from "./StatementIncome.vue";
import StatementIncomeSummary from "./StatementIncomeSummary.vue";
import StatementExpenses from "./StatementExpenses.vue";
import StatementExpensesSummary from "./StatementExpensesSummary.vue";

export default {
  components: {
    StatementIncome,
    StatementIncomeSummary,
    StatementExpenses,
    StatementExpensesSummary
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
#statement-area {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "income income-summary"
    "expenses expense-summary";
  grid-column-gap: 1%;
}

#income-summary,
#expense-summary {
  font-family: sans-serif;
  border-bottom: 4px solid #000;
  display: flex;
  flex-direction: column;
  min-height: 20rem;
}

@media (max-width: 800px) {
  #statement-area {
    grid-template-columns: 1fr;
    grid-template-areas:
      "income"
      "income-summary"
      "expenses"
      "expense-summary";
  }
}
</style>