<template>
  <div>
    <h2 id="balance-sheet-title">Balance Sheet</h2>
    <section id="balance-sheet-area">
      <div id="assets">
        <h3 class="column-title-bar">Assets</h3>
        <div id="asset-list">
          <div class="line-input">
            <label for="savings">Savings:</label>
            <input type="text" id="savings" class="numeric" />
          </div>
          <div class="line-input all-text">
            <div>Stocks/Mutual's/CDs</div>
            <div>No. of Shares:</div>
            <div>Cost/Share:</div>
          </div>
          <div class="line-input">
            <input type="text" />
            <input type="text" class="numeric" />
            <input type="text" class="numeric" />
          </div>
          <div class="line-input">
            <input type="text" />
            <input type="text" class="numeric" />
            <input type="text" class="numeric" />
          </div>
          <div class="line-input all-text">
            <div>Real Estate:</div>
            <div>Down Pay:</div>
            <div>Cost:</div>
          </div>
          <div class="line-input">
            <input type="text" />
            <input type="text" class="numeric" />
            <input type="text" class="numeric" />
          </div>
          <div class="line-input">
            <input type="text" />
            <input type="text" class="numeric" />
            <input type="text" class="numeric" />
          </div>
          <div class="line-input">
            <input type="text" />
            <input type="text" class="numeric" />
            <input type="text" class="numeric" />
          </div>
          <div class="line-input">
            <input type="text" />
            <input type="text" class="numeric" />
            <input type="text" class="numeric" />
          </div>
          <div class="line-input all-text">
            <div>Business:</div>
            <div>Down Pay:</div>
            <div>Cost:</div>
          </div>
          <div class="line-input">
            <input type="text" />
            <input type="text" class="numeric" />
            <input type="text" class="numeric" />
          </div>
          <div class="line-input">
            <input type="text" />
            <input type="text" class="numeric" />
            <input type="text" class="numeric" />
          </div>
        </div>
      </div>
      <div id="liabilities">
        <h3 class="column-title-bar">Liabilities</h3>
        <table id="liability-list" class="line-inputs">
          <tbody>
            <tr>
              <td class="line-input">
                <label>Home Mortgage:</label>
              </td>
              <td colspan="2">
                <input type="text" class="numeric" />
              </td>
            </tr>
            <tr class="line-input">
              <td>
                <label>School Loans:</label>
              </td>
              <td colspan="2">
                <input type="text" class="numeric" />
              </td>
            </tr>
            <tr class="line-input">
              <td>
                <label>Car Loans:</label>
              </td>
              <td colspan="2">
                <input type="text" class="numeric" />
              </td>
            </tr>
            <tr class="line-input">
              <td>
                <label>Credit Cards:</label>
              </td>
              <td colspan="2">
                <input type="text" class="numeric" />
              </td>
            </tr>
            <tr class="line-input">
              <td>
                <label>Retail Debt:</label>
              </td>
              <td colspan="2">
                <input type="text" class="numeric" />
              </td>
            </tr>
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
            <tr class="line-input">
              <td>
                <label>Bank Loan:</label>
              </td>
              <td colspan="2">
                <input type="text" class="numeric" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#balance-sheet-title {
	position: absolute;
	margin-top: -45px;
}
/* 2nd grid for the bottom */
#balance-sheet-area {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: "assets liabilities";
	border: 2px solid #000;
}

#assets {
	grid-area: assets;
}
#liabilities {
	grid-area: liabilities;
}

#asset-list {
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	justify-content: flex-start;
}

#asset-list > * {
	/* In relation to its parent */
	flex: 1 1 auto;
	margin: 7px;
	/* in relation to its children */
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
}
#asset-list > * > * {
	flex: 1 1 auto;
	white-space: nowrap;
}

table#liability-list {
	border: 0;
}
table#liability-list tbody tr td:first-child {
	width: 130px;
}
</style>