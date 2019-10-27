<template>
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
</template>

<script>
export default {};
</script>

<style lang="scss">
#expenses {
	grid-area: expenses;
}
</style>