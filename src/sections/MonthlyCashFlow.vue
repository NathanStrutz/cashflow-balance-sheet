<template>
  <div id="monthly-cash-flow-area">
    <div class="total-io">
      <label for="monthly-cash-flow">
        Monthly Cash Flow:
        <sub>(Pay Check)</sub>
      </label>
      <input type="text" id="monthly-cash-flow" class="numeric" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#monthly-cash-flow {
	font-size: 1.2rem;
}

#monthly-cash-flow-area {
	display: flex;
	flex-direction: column;
	margin: 15px 0 15px 50%;
	.total-io input {
		flex: 1 0 110px;
	}
}
</style>