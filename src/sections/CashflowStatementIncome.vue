<template>
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
</template>

<script>
export default {};
</script>

<style lang="scss">
#income {
	grid-area: income;
}
</style>