<template>
  <div>
    <h2>Income Statement</h2>
    <section id="cashflow-statement-area">
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
            <tr class="line-input">
              <td>
                <label>Salary:</label>
                <input type="text" id="salary" />
              </td>
              <td>
                <input type="text" class="income" />
              </td>
            </tr>
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
      <div id="income-summary">
        <div id="auditor-area">
          <div class="title-input">
            <label>Auditor</label>
            <input type="text" id="auditor" />
          </div>
          <sub>Person on your right</sub>
        </div>
        <div id="passive-income-area">
          <div class="passive-income-area">
            <label>Passive Income =</label>
            <input type="text" id="passive-income" class="numeric" />
          </div>
          <sub>(Cash flows from Interest + Dividends + Real Estate + Businesses</sub>
        </div>
        <div class="total-io">
          <label for="total-income">Total Income:</label>
          <input type="text" id="total-income" class="numeric" />
        </div>
      </div>

      <div class="expenses">
        <h3 class="column-title-bar">Expenses</h3>
        <table class="line-inputs">
          <tbody>
            <tr class="line-input">
              <td>
                <label>Taxes:</label>
                <input type="text" id="salary" />
              </td>
              <td>
                <input type="text" class="expense" />
              </td>
            </tr>
            <tr class="line-input">
              <td>
                <label>Home Mortgage:</label>
                <input type="text" id="interest" />
              </td>
              <td>
                <input type="text" class="expense" />
              </td>
            </tr>
            <tr class="line-input">
              <td>
                <label>School Loan Payment:</label>
                <input type="text" id="dividends" />
              </td>
              <td>
                <input type="text" class="expense" />
              </td>
            </tr>
            <tr class="line-input">
              <td>
                <label>Car Payment:</label>
                <input type="text" id="salary" />
              </td>
              <td>
                <input type="text" class="expense" />
              </td>
            </tr>
            <tr class="line-input">
              <td>
                <label>Credit Card Payment:</label>
                <input type="text" />
              </td>
              <td>
                <input type="text" class="expense" />
              </td>
            </tr>
            <tr class="line-input">
              <td>
                <label>Retail Payment:</label>
                <input type="text" />
              </td>
              <td>
                <input type="text" class="expense" />
              </td>
            </tr>
            <tr class="line-input">
              <td>
                <label>Other Expenses:</label>
                <input type="text" />
              </td>
              <td>
                <input type="text" class="expense" />
              </td>
            </tr>
            <tr class="line-input">
              <td>
                <label>Child Expenses:</label>
                <input type="text" />
              </td>
              <td>
                <input type="text" class="expense" id="child-expenses" />
              </td>
            </tr>
            <tr class="line-input">
              <td>
                <label>Bank Loan Payment:</label>
                <input type="text" />
              </td>
              <td>
                <input type="text" class="expense" />
              </td>
            </tr>
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
      <div id="expense-summary">
        <div id="children-box">
          <div class="children-input">
            <label for="number-of-children">
              Number of
              <br />Children:
            </label>
            <input type="text" id="number-of-children" class="numeric" />
          </div>
          <sub>(Begin game with 0 children)</sub>
          <div class="children-input">
            <label for="per-child-expense">
              Per Child
              <br />Expense:
            </label>
            <input type="text" id="per-child-expense" class="numeric" />
          </div>
        </div>
        <div class="total-io">
          <label for="total-expenses">Total Expenses:</label>
          <input type="text" id="total-expenses" class="numeric" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
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
#income {
	grid-area: income;
}
#expenses {
	grid-area: expenses;
}

#income-summary {
	justify-content: space-between;
	grid-area: income-summary;
}

#passive-income-area .passive-income-area {
	/* the #area is the upper section, the .area is two horizontal neighbors */
	display: flex;
	flex-direction: row;
	flex: 1 1 100px;
	align-content: stretch;
}
#passive-income-area .passive-income-area label {
	flex: 0 0 132px;
	white-space: nowrap;
}
#passive-income-area .passive-income-area input {
	flex: 1 1 auto;
}

#expense-summary {
	justify-content: space-between;
	grid-area: expense-summary;
}

#children-box {
	background-color: #ccc;
	border: 1px solid black;
	margin: 40px 24px 24px;
	min-width: 200px;
	width: 65%;
	max-width: 560px;
	padding: 16px;
	white-space: nowrap;
}
#children-box input {
	background-color: #ccc;
	border-left-color: #aaa;
}
#children-box label {
	font-weight: bold;
	width: 150px;
}
.children-input {
	display: flex;
}
.children-input ~ .children-input {
	margin-top: 15px;
}
#children-box sub {
	display: block;
}

#income-summary,
#expense-summary {
	border-bottom: 4px solid #000;
	display: flex;
	flex-direction: column;
	.total-io {
		padding: 0 0 30px 40%;
	}
}
</style>