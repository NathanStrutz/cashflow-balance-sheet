<template>
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
</template>

<script>
export default {};
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