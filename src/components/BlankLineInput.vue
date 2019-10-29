<template>
	<tr class="line-input">
		<td>
			<input type="text" :value="text" @input="$emit('updateText', $event.target.value)" />
		</td>
		<td>
			<input type="text" class="numeric" :value="value" @input="$emit('updateValue', $event.target.value)" />
		</td>
	</tr>
</template>

<script>
export default {
	props: {
		text: String,
		value: String
	}
};
</script>

<style lang="scss">
</style>
